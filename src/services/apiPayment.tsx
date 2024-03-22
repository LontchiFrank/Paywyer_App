import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { foods } from '../models/food.model';
export interface payment {
  name: string;
  category: string;
  total_Revenue: [];
}

const API_URL = 'https://65fc85d79fc4425c6530556a.mockapi.io/payment/v1/';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    getPayments: builder.query<payment[], void>({
      query: () => 'payments',
    }),
  }),
});

export const { useGetPaymentsQuery } = paymentApi;
