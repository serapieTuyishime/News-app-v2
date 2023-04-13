import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
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
            query: () =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}/sources?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        }),
        getNewsByLanguage: builder.query({
            query: (language) =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}?language=${language}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        }),
        getNewsByCountry: builder.query({
            query: (country) =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}?country=${country}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        }),
        getNewsByCategory: builder.query({
            query: (category) =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}?category=${category}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        }),
        getNewsByPublishers: builder.query({
            query: (publisher) =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}?sources=${publisher}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
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
