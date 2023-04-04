import { createSlice, current } from "@reduxjs/toolkit";
import { useMemo } from "react";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        popuralNewsUrl:
            "https://newsapi.org/v2/everything?q=apple&from=2023-03-27&to=2023-03-27&sortBy=popularity&apiKey=4f0b70fd7dd84b25837caa68f5b8d053",
        popuralNews: {
            data: {
                articles: [
                    {
                        author: "Jack rowlings",
                        content:
                            "Togg-PrototypDer ehemalige Bosch-Manager Gürcan Karakas hat das Vertrauen des türkischen Staates und großer Unternehmen.(Foto: picture alliance / AA) Istanbul Die Erwartungen an das erste Elektr… [+1160 chars]",
                        description:
                            "Mit dem Togg T10X soll die türkische Autoindustrie international konkurrenzfähig werden. Das Modell kann nun bestellt werden. Es ist digital ausgestattet, aber auch teuer.",
                        publishedAt: "2023-03-20T06:20:48Z",
                        source: { id: "handelsblatt", name: "Handelsblatt" },
                        title: "Elektromobilität: Türkischer Tesla-Herausforderer wird teurer als erwartet",
                        url: "https://www.handelsblatt.com/unternehmen/industrie/elektro-suv-von-togg-tesla-herausforderer-wird-teurer-als-erwartet/29042788.html",
                        urlToImage:
                            "https://www.handelsblatt.com/images/togg-prototyp/28542374/4-format2003.jpg",
                    },
                ],
            },
        },
        currentNewsitem: {
            title: "None",
            source: { id: "234", name: "No name" },
            author: "None",
            description: "None",
            url: "https://www.handelsblatt.com/unternehmen/industrie/elektro-suv-von-togg-tesla-herausforderer-wird-teurer-als-erwartet/29042788.html",
            urlToImage:
                "https://www.handelsblatt.com/images/togg-prototyp/28542374/4-format2003.jpg",
            publishedAt: "12-12-1200",
            content: "None",
        },
        isFullArticleVisible: false,
        unmanipulatedNewsArticles: [],
        textToSearch: "",
    },
    reducers: {
        loadPopuralNews: (state, action) => {
            state.popuralNews = action.payload;
            state.unmanipulatedNewsArticles = action.payload;
        },
        changeVisibilityOfFullAtricle: (state) => {
            state.isFullArticleVisible = !state.isFullArticleVisible;
        },
        loadNewsItemById: (state, action) => {
            state.currentNewsitem = state.popuralNews.data.articles.filter(
                (newsItem) => newsItem.title === action.payload
            )[0];
            state.isFullArticleVisible = true;
        },
        updateTextToSearchwith: (state, action) => {
            state.textToSearch = action.payload;
        },
    },
});

export const {
    loadPopuralNews,
    loadNewsItemById,
    changeVisibilityOfFullAtricle,
    updateTextToSearchwith,
} = newsSlice.actions;
export default newsSlice.reducer;
