import { SERVICES, type ServiceCode } from "../config/services";
import type { Question } from "../components/Question/model/types";

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
