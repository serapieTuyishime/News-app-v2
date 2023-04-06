import { API_KEY, NEWS_API_URL } from "@/config/Variables";
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
            query: () => `${NEWS_API_URL}sources?apiKey=${API_KEY}`,
        }),
        getNewsByPublishers: builder.query({
            query: (name) =>
                `${NEWS_API_URL}?sources=${name}&apiKey=${API_KEY}`,
        }),
    }),
});

export const {
    useLazyGetPopuralArticlesQuery,
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
} = newsApi;
