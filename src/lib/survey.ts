import { SERVICES, type ServiceCode } from "../config/services";
import type {
  Question,
  LocalizedString,
  QuestionOption,
  FollowUp,
  UnlocalizedQuestion,
} from "../components/Question/model/types";

/**
 * Recursively localizes question fields from LocalizedString objects to strings based on the locale.
 */
export function localizeQuestions(
  questions: Question[],
  locale: string
): Question[] {
  const getLocalizedText = (
    text: LocalizedString | string | undefined
  ): string => {
    if (typeof text === "object" && text !== null) {
      // Ensure locale is a valid key for LocalizedString
      if (locale in text) {
        return text[locale as keyof LocalizedString];
      }
      // Fallback if locale key is not found (shouldn't happen with proper data)
      return text.en || text.ru || ""; // Fallback to English, then Russian, then empty string
    }
    return text || ""; // Return empty string if text is undefined
  };

  return questions.map((q) => {
    const newQuestion: Question = { ...q };

    // Localize main question text
    newQuestion.question = getLocalizedText(q.question);

    // Localize options labels
    if (newQuestion.options) {
      newQuestion.options = newQuestion.options.map((opt) => ({
        ...opt,
        label: getLocalizedText(opt.label),
      }));
    }

    // Localize followUp placeholder
    if (newQuestion.followUp) {
      newQuestion.followUp = {
        ...newQuestion.followUp,
        placeholder: getLocalizedText(newQuestion.followUp.placeholder),
      };
    }

    // Localize main placeholder
    if (newQuestion.placeholder) {
      newQuestion.placeholder = getLocalizedText(newQuestion.placeholder);
    }

    // Recursively localize subQuestions if they exist and have text fields
    if (newQuestion.subQuestions) {
      newQuestion.subQuestions = newQuestion.subQuestions.map((subQ) => ({
        ...subQ,
        text: getLocalizedText(subQ.text),
      }));
    }

    return newQuestion;
  });
}

/**
 * Разворачивает вопросы с типом 'service-template' в три обычных вопроса (по видам услуг)
 */
export function expandServiceTemplates(questions: Question[]): Question[] {
  const serviceCodes: ServiceCode[] = SERVICES.map((s) => s.code);
  const expanded: Question[] = [];
  let nextId = 1;

  for (const q of questions) {
    if (q.inputType === "service-template") {
      const targetServices =
        q.services && q.services.length > 0 ? q.services : serviceCodes;

      targetServices.forEach((svc) => {
        expanded.push({
          ...q,
          id: nextId++,
          inputType: "radio",
          service: svc,
          services: undefined,
        });
      });
    } else if (
      q.inputType === "scale-service-template" ||
      q.inputType === "yes-no-service-template"
    ) {
      if (q.subQuestions) {
        q.subQuestions.forEach((subQ) => {
          expanded.push({
            ...q,
            id: nextId++,
            inputType:
              q.inputType === "scale-service-template" ? "scale" : "radio",
            service: subQ.service,
            services: undefined,
            subQuestions: undefined,
            question: `${q.question} `,
          });
        });
      }
    } else {
      expanded.push({
        ...q,
        id: nextId++,
      });
    }
  }
  return expanded;
}
