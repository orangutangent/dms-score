import { useMutation } from '@tanstack/react-query';
import { submitGovernmentSurvey } from '../../../data-access/survey-api';
import { Answer } from '../model/types';
import { AxiosError } from 'axios';

interface LocationData {
  country: string;
  region: string;
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

export const useSubmitGovernmentSurvey = () => {
  return useMutation<SubmitResponse, AxiosError, GovernmentSurveySubmitData>({
    mutationFn: async (data) => {
      const response = await submitGovernmentSurvey(data);
      return response.data; // Return only the data part of the response
    },
  });
};