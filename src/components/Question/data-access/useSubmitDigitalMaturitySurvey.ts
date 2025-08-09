import { useMutation } from '@tanstack/react-query';
import { submitDigitalMaturitySurvey } from '../../../api/survey-api';
import { Answer } from '../model/types';
import { AxiosError } from 'axios';

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

interface SubmitResponse {
  message: string;
  resultId: string;
}

export const useSubmitDigitalMaturitySurvey = () => {
  return useMutation<SubmitResponse, AxiosError, DigitalMaturitySubmitData>({
    mutationFn: async (data) => {
      const response = await submitDigitalMaturitySurvey(data);
      return response.data; // Return only the data part of the response
    },
  });
};