import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { ProductData } from 'types/Product';

const VITE_API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
const url: string = `${VITE_API_BASE_URL}/products`;

const fetchData = async (): Promise<ProductData> => {
  const response = await axios.get<ProductData>(url, {
    headers: {
      accept: 'application/json',
    },
  });
  console.log(response.data);
  return response.data;
};

export function useProductData() {
  const query: UseQueryResult<ProductData, Error> = useQuery<
    ProductData,
    Error
  >({
    queryFn: fetchData,
    queryKey: ['product-data'],
  });

  return {
    ...query,
    data: query.data,
  };
}
