import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authHeader from './auth-header';

// const baseUrl = 'http://localhost:8000/api/v1/companies/';
const baseUrl = 'https://quark-api-141h.onrender.com/api/v1/companies/';

export const companyApi = createApi({
    reducerPath: 'companyApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = JSON.parse(localStorage.getItem("accesstoken") || "");
            // console.log("token", token);
            headers.set('Access-Control-Allow-Origin', '*')
            if(token) headers.set('Authorization', `Bearer ${token}`)
          
            return headers
        },
    }),
    tagTypes: ['Companies'],
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => `companies`,
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Companies', id }],
        }),
        getCompany: builder.query({
            query: () => ({
                url: `get-company`,
                method: 'GET',
            }),
            transformResponse: (response: { data:any }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            providesTags: (result, error, id) => [{ type: 'Companies', id }],
        }),
        createCompany: builder.mutation({
            query: (data) => ({
                url: `create-company`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Companies'],
        }),
        updateCompany: builder.mutation({
            query: ({ id, title }) => ({
            url: `companies/${id}`,
            method: 'PUT',
            body: { title },
            }),
            invalidatesTags: ['Companies'],
        }),
        deleteCompany: builder.mutation({
            query: (id) => ({
            url: `companies/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Companies'],
        }),
    }),
});
  
export const { useGetCompaniesQuery, useCreateCompanyMutation, useGetCompanyQuery } = companyApi;