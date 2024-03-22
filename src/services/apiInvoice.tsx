import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { foods } from '../models/food.model';
interface invoice {
  billing_from: string;
  billing_to: string;
  email_from: string;
  email_to: string;
  address_to: string;
  address_from: string;
  date_issued: string;
  due_date: string;
  due_amount: number;
  dataSelect: [];
}

const API_URL = 'https://65fc85d79fc4425c6530556a.mockapi.io/payment/v1/';

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (builder) => ({
    getInvoices: builder.query<invoice[], void>({
      query: () => 'Invoice',
    }),
  }),
});

export const { useGetInvoicesQuery } = invoiceApi;
