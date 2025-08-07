import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Answer } from '../components/Question/model/types';

interface LocationState {
  country: string;
  region: string;
}

interface BusinessSurveyState {
  answers: Record<number, Answer>;
  location: LocationState;
  sector: string;
  finalThoughts: string;
  setAnswer: (questionIndex: number, answer: Answer) => void;
  setLocation: (location: LocationState) => void;
  setSector: (sector: string) => void;
  setFinalThoughts: (thoughts: string) => void;
}

export const useBusinessSurveyStore = create<BusinessSurveyState>()(
  persist(
    (set) => ({
      answers: {},
      location: { country: '', region: '' },
      sector: '',
      finalThoughts: '',
      setAnswer: (questionIndex, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: answer },
        })),
      setLocation: (location) => set({ location }),
      setSector: (sector) => set({ sector }),
      setFinalThoughts: (thoughts) => set({ finalThoughts: thoughts }),
    }),
    {
      name: 'dms-business-survey-storage',
    }
  )
);