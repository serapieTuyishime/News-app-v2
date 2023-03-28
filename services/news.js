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
                "https://newsapi.org/v2/top-headlines/sources?apiKey=4f0b70fd7dd84b25837caa68f5b8d053",
        }),
    }),
});

export const { useLazyGetPopuralArticlesQuery, useGetTopPublishersQuery } =
    newsApi;
