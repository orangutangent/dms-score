import axios from 'axios';

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

export interface CountryStats {
  digitalMaturity: SurveyStats;
  government: SurveyStats;
}

export type AdminStats = Record<string, CountryStats>;

export const fetchAdminStats = async (): Promise<AdminStats> => {
  const { data } = await axios.get<AdminStats>('/api/admin-stats');
  return data;
};
