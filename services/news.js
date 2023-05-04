import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const NEWS_API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: NEWS_API_URL,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getPopuralArticles: builder.query({
            query: (name) => `${name}`,
        }),
        getTopPublishers: builder.query({
            query: () => `/sources?apiKey=${API_KEY}`,
        }),
        getNewsByLanguage: builder.query({
            query: (language) => `?language=${language}&apiKey=${API_KEY}`,
        }),
        getNewsByCountry: builder.query({
            query: (country) => `?country=${country}&apiKey=${API_KEY}`,
        }),
        getNewsByCategory: builder.query({
            query: (category) => `?category=${category}&apiKey=${API_KEY}`,
        }),
        getNewsByPublishers: builder.query({
            query: (publisher) => `?sources=${publisher}&apiKey=${API_KEY}`,
        }),
    }),
});

export const {
    useLazyGetPopuralArticlesQuery,
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
    useLazyGetNewsByCountryQuery,
    useLazyGetNewsByLanguageQuery,
    useLazyGetNewsByCategoryQuery,
} = newsApi;
