import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProduct: builder.query({
            query: (id) => `/products/${ id }`,
        }),
        getCategories: builder.query({
            query: () => '/categories',
        }),
        getCategory: builder.query({
            query: (id) => `/categories/${ id }`,
        }),
    })
});

export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery, useGetCategoryQuery } = apiSlice;