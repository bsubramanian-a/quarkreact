import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authHeader from './auth-header';

// const baseUrl = 'http://localhost:8000/api/v1/';
const baseUrl = 'https://quark-api-141h.onrender.com/api/v1/';

export const truckApi = createApi({
    reducerPath: 'truckApi',
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
    tagTypes: ['Trucks'],
    endpoints: (builder) => ({
        getTrucks: builder.query({
            query: (page = 1) => `trucks?_page=${page}&_limit=10`,
            providesTags: ['Trucks'],
        }),
        createTruck: builder.mutation({
            query: (data) => ({
                url: `create-truck`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: ['Trucks'],
        }),
        updateTruck: builder.mutation({
            query: ({ id, title }) => ({
            url: `trucks/${id}`,
            method: 'PUT',
            body: { title },
            }),
            invalidatesTags: ['Trucks'],
        }),
        deleteTruck: builder.mutation({
            query: (id) => ({
            url: `trucks/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Trucks'],
        }),
    }),
});
  
export const { useGetTrucksQuery, useCreateTruckMutation, useUpdateTruckMutation, useDeleteTruckMutation } = truckApi;