import { useQuery } from '@tanstack/react-query';
import { fetchAdminStats } from '../../../api/admin-stats-api';

export const useAdminStats = (selectedCountry: string, activeTab: string, startDate: string, endDate: string, enabled?: boolean) => {
  return useQuery({
    queryKey: ['admin-stats', selectedCountry, activeTab, startDate, endDate],
    queryFn: () => fetchAdminStats(selectedCountry, activeTab, startDate, endDate),
    enabled: enabled,
  });
};
