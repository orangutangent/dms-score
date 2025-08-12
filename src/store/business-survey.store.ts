import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Answer } from "../components/Question/model/types";
import type { BusinessSurveyResponseDTO } from "@/api/types";

interface LocationState {
  country: string;
  region: string;
}

interface ContactsState {
  name: string;
  affiliation: string;
  email: string;
  tel: string;
}

interface BusinessSurveyState {
  responses: BusinessSurveyResponseDTO[];
  location: LocationState;
  sector: string;
  finalThoughts: string;
  contacts: ContactsState;
  setResponse: (response: BusinessSurveyResponseDTO) => void;
  setLocation: (location: LocationState) => void;
  setSector: (sector: string) => void;
  setFinalThoughts: (thoughts: string) => void;
  setContacts: (contacts: ContactsState) => void;
  clearResponses: () => void;
}

export const useBusinessSurveyStore = create<BusinessSurveyState>()(
  persist(
    (set, get) => ({
      responses: [],
      location: { country: "", region: "" },
      sector: "",
      finalThoughts: "",
      contacts: { name: "", affiliation: "", email: "", tel: "" },
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
      setSector: (sector) => set({ sector }),
      setFinalThoughts: (thoughts) => set({ finalThoughts: thoughts }),
      setContacts: (contacts) => set({ contacts }),
      clearResponses: () => set({ responses: [], contacts: { name: "", affiliation: "", email: "", tel: "" } }),
    }),
    {
      name: "dms-business-survey-storage",
    }
  )
);