import axios from "axios";

// Types from API
export interface CriterionStat {
  average: number;
}

export interface SurveyStats {
  count: number;
  totalScore: number;
  criterion: Record<string, CriterionStat>;
  average: number;
}

export interface GovernmentSurveyStats extends SurveyStats {
  levels: Record<string, CriterionStat>; // Только критерии уровней
  specialSections: Record<string, CriterionStat>; // Специальные разделы
  services: Record<string, SurveyStats>; // Статистика по видам услуг
}

export interface DigitalMaturitySurveyStats extends SurveyStats {
  services: Record<string, SurveyStats>; // Статистика по видам услуг
}

export interface CountryStats {
  digitalMaturity: DigitalMaturitySurveyStats;
  government: GovernmentSurveyStats;
  governmentByService: Record<string, SurveyStats>; // Статистика по услугам
  digitalMaturityByService: Record<string, SurveyStats>; // Статистика по услугам для бизнеса
}

export type AdminStats = Record<string, CountryStats>;

export const fetchAdminStats = async (): Promise<AdminStats> => {
  const { data } = await axios.get<AdminStats>("/api/admin-stats");
  return data;
};
