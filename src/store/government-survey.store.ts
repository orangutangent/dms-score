import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Answer } from '../components/Question/model/types';

interface LocationState {
  country: string;
  region: string;
}

interface GovernmentSurveyState {
  answers: Record<number, Answer>;
  location: LocationState;
  finalThoughts: string;
  setAnswer: (questionIndex: number, answer: Answer) => void;
  setLocation: (location: LocationState) => void;
  setFinalThoughts: (thoughts: string) => void;
}

export const useGovernmentSurveyStore = create<GovernmentSurveyState>()(
  persist(
    (set) => ({
      answers: {},
      location: { country: '', region: '' },
      finalThoughts: '',
      setAnswer: (questionIndex, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: answer },
        })),
      setLocation: (location) => set({ location }),
      setFinalThoughts: (thoughts) => set({ finalThoughts: thoughts }),
    }),
    {
      name: 'dms-government-survey-storage',
    }
  )
);
