import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://5fc9346b2af77700165ae514.mockapi.io/products' }),
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: () => `products`,
    // }),
    getProductDetails: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
})


export const { useGetProductsQuery,useGetProductDetailsQuery } = apiSlice