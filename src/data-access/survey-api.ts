import api from '../lib/axios';
import { Answer } from '../components/Question/model/types';

interface LocationData {
  country: string;
  region: string;
}

interface DigitalMaturitySubmitData {
  location: LocationData;
  sector: string;
  finalThoughts: string;
  answers: Record<number, Answer>;
}

interface GovernmentSurveySubmitData {
  location: LocationData;
  finalThoughts: string;
  answers: Record<number, Answer>;
}

interface SubmitResponse {
  message: string;
  resultId: string;
}

export const submitDigitalMaturitySurvey = (data: DigitalMaturitySubmitData) =>
  api.post<SubmitResponse>('/submit-digital-maturity', data);

export const submitGovernmentSurvey = (data: GovernmentSurveySubmitData) =>
  api.post<SubmitResponse>('/submit-government-survey', data);
