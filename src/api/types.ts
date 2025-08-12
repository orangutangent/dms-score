import type { ServiceCode } from "@/config/services";

export interface LocationData {
  country: string;
  region: string;
}

export interface GovernmentSurveyResponseDTO {
  questionId: number;
  criterion: string;
  service?: ServiceCode;
  score01: number; // нормализованный балл 0..1 за вопрос
  answerValue?: string; // исходное значение, если нужно
}

export interface GovernmentSurveySubmitDataDTO {
  location: LocationData;
  department: string;
  finalThoughts: string;
  responses: GovernmentSurveyResponseDTO[];
}

export interface GovernmentSurveySubmitResultDTO {
  message: string;
  resultId: string;
}

// Новые типы для MSP опроса
export interface BusinessSurveyResponseDTO {
  questionId: number;
  criterion: string;
  service?: ServiceCode;
  score01: number; // нормализованный балл 0..1 за вопрос
  answerValue?: string; // исходное значение, если нужно
}

export interface BusinessSurveySubmitDataDTO {
  location: LocationData;
  sector: string;
  finalThoughts: string;
  responses: BusinessSurveyResponseDTO[];
}

export interface BusinessSurveySubmitResultDTO {
  message: string;
  resultId: string;
}