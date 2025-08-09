import { useQuery } from '@tanstack/react-query';
import { fetchAdminStats } from '../../../api/admin-stats-api';

export const useAdminStats = () => {
  return useQuery({
    queryKey: ['admin-stats'],
    queryFn: fetchAdminStats,
  });
};
