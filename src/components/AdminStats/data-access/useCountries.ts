import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCountries = async (): Promise<string[]> => {
  const { data } = await axios.get<string[]>('/api/countries');
  return data;
};

export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
};
