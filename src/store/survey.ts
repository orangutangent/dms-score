import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Answer } from '../components/Question/model/types';

interface SurveyAnswers {
  digitalmaturity: Record<number, Answer>;
  govermentssurvey: Record<number, Answer>;
  govermentsmi: Record<number, Answer>;
}

interface SurveyState {
  answers: SurveyAnswers;
  setAnswer: (survey: keyof SurveyAnswers, questionIndex: number, answer: Answer) => void;
}

export const useSurveyStore = create<SurveyState>()(
  persist(
    (set) => ({
      answers: {
        digitalmaturity: {},
        govermentssurvey: {},
        govermentsmi: {},
      },
      setAnswer: (survey, questionIndex, answer) =>
        set((state) => ({
          ...state,
          answers: {
            ...state.answers,
            [survey]: {
              ...state.answers[survey],
              [questionIndex]: answer,
            },
          },
        })),
    }),
    {
      name: 'dms-survey-storage',
    }
  )
);