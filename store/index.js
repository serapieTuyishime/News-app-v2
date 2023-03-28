import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../slices/news";
import { setupListeners } from "@reduxjs/toolkit/query";
import { newsApi } from "../services/news";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});
setupListeners(store.dispatch);
