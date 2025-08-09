import type { ServiceCode } from "@/config/services";

export type InputType =
  | "scale"
  | "radio"
  | "text"
  | "location"
  | "sector"
  | "final-thoughts"
  | "service-template";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface FollowUp {
  triggerValue: string;
  inputType: "text";
  placeholder: string;
}

export interface Question {
  id: number;
  criterion: string;
  inputType: InputType;
  question: string;
  options?: QuestionOption[];
  followUp?: FollowUp;
  weight: number;
  placeholder?: string; // For simple text inputs
  scoring?: { [key: string]: number };
  // Service-specific fields
  service?: ServiceCode; // проставляется у развернутого вопроса
  services?: ServiceCode[]; // список услуг для шаблона (если не задан — берем все)
}

export type Answer = {
  value: string;
  details?: string;
  score?: number; // нормализованный балл 0..1, если посчитан на фронте
} | null;
