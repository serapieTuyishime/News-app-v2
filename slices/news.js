import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        popuralNewsUrl:
            "https://newsapi.org/v2/everything?q=apple&from=2023-03-27&to=2023-03-27&sortBy=popularity&apiKey=4f0b70fd7dd84b25837caa68f5b8d053",
        popuralNews: {
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
    reducers: {
        add: (state, action) => {
            state.popuralNewsUrl = "/";
        },
        loadPopuralNews: (state, action) => {
            let returnedNews = action.payload;
            state.popuralNews = Object.keys(returnedNews.data);
        },
    },
});

export const { add, loadPopuralNews } = newsSlice.actions;
export default newsSlice.reducer;
