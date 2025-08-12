import type { ServiceCode } from "@/config/services";

export type LocalizedString = {
  en: string;
  ru: string;
};

export type InputType =
  | "scale"
  | "radio"
  | "text"
  | "location"
  | "sector"
  | "department"
  | "final-thoughts"
  | "service-template"
  | "scale-service-template"
  | "yes-no-service-template"
  | "contacts";

export interface QuestionOption {
  value: string;
  label: LocalizedString | string;
}

export interface FollowUp {
  triggerValue: string;
  inputType: "text";
  placeholder: LocalizedString | string;
}

export interface Question {
  id: number;
  criterion: string;
  inputType: InputType;
  question: string;
  options?: QuestionOption[];
  followUp?: FollowUp;
  weight?: number;
  placeholder?: string;
  scoring?: { [key: string]: number };
  service?: ServiceCode;
  services?: ServiceCode[];
  subQuestions?: {
    service: ServiceCode;
    text: string;
  }[];
}
export interface UnlocalizedQuestion {
  id: number;
  criterion: string;
  inputType: InputType;
  question: LocalizedString;
  options?: QuestionOption[];
  followUp?: FollowUp;
  weight?: number;
  placeholder?: LocalizedString;
  scoring?: { [key: string]: number };
  service?: ServiceCode;
  services?: ServiceCode[];
  subQuestions?: {
    service: ServiceCode;
    text: LocalizedString;
  }[];
}

export type Answer = {
  value: string;
  details?: string;
  score?: number;
} | null;
