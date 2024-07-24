import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { GalleryData } from 'types/Gallery';

const VITE_API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL;
const url: string = `${VITE_API_BASE_URL}/gallery`;

const fetchData = async (): Promise<GalleryData> => {
  const response = await axios.get<GalleryData>(url, {
    headers: {
      accept: 'application/json',
    },
  });
  console.log(response.data);
  return response.data;
};

export function useGalleryData() {
  const query : UseQueryResult<GalleryData, Error> = useQuery<GalleryData, Error>({
    queryFn: fetchData,
    queryKey: ['gallery-data'],
  });

  return {
    ...query,
    data: query.data,
  };
}
