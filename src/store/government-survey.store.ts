import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Answer } from '../components/Question/model/types';

interface GovernmentSurveyState {
  answers: Record<number, Answer>;
  setAnswer: (questionIndex: number, answer: Answer) => void;
}

export const useGovernmentSurveyStore = create<GovernmentSurveyState>()(
  persist(
    (set) => ({
      answers: {},
      setAnswer: (questionIndex, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: answer },
        })),
    }),
    {
      name: 'dms-government-survey-storage',
    }
  )
);
