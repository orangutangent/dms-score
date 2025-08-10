import { SERVICES, type ServiceCode } from "../config/services";
import type { Question } from "../components/Question/model/types";

/**
 * Разворачивает вопросы с типом 'service-template' в три обычных вопроса (по видам услуг)
 */
export function expandServiceTemplates(questions: Question[]): Question[] {
  const serviceCodes: ServiceCode[] = SERVICES.map((s) => s.code);
  const expanded: Question[] = [];
  let nextId = 1; // Начинаем с 1 для последовательных ID

  for (const q of questions) {
    if (q.inputType !== "service-template") {
      expanded.push({
        ...q,
        id: nextId++,
      });
      continue;
    }

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
  }
  return expanded;
}
