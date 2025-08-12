import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GovernmentSurveyResponseDTO } from "@/api/types";

interface LocationState {
  country: string;
  region: string;
}

interface GovernmentSurveyState {
  responses: GovernmentSurveyResponseDTO[];
  location: LocationState;
  department: string;
  finalThoughts: string;
  setResponse: (response: GovernmentSurveyResponseDTO) => void;
  setLocation: (location: LocationState) => void;
  setDepartment: (department: string) => void;
  setFinalThoughts: (thoughts: string) => void;
  clearResponses: () => void;
}

export const useGovernmentSurveyStore = create<GovernmentSurveyState>()(
  persist(
    (set, get) => ({
      responses: [],
      location: { country: "", region: "" },
      department: "",
      finalThoughts: "",
      setResponse: (response) =>
        set((state) => {
          const existingIndex = state.responses.findIndex(
            (r) =>
              r.questionId === response.questionId &&
              r.service === response.service
          );
          if (existingIndex >= 0) {
            // Обновляем существующий ответ
            const updated = [...state.responses];
            updated[existingIndex] = response;
            return { responses: updated };
          } else {
            // Добавляем новый ответ
            return { responses: [...state.responses, response] };
          }
        }),
      setLocation: (location) => set({ location }),
      setDepartment: (department) => set({ department }),
      setFinalThoughts: (thoughts) => set({ finalThoughts: thoughts }),
      clearResponses: () => set({ responses: [], location: { country: "", region: "" }, department: "", finalThoughts: "" }),
    }),
    {
      name: "dms-government-survey-storage",
    }
  )
);