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
        getNewsByPublishers: builder.query({
            query: (name) =>
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}?sources=${name}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        }),
    }),
});

export const {
    useLazyGetPopuralArticlesQuery,
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
} = newsApi;
