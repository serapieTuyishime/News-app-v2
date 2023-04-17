import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        popuralNewsUrl: `${process.env.NEXT_PUBLIC_NEWS_API_URL}?language=en&pageSize=${process.env.NEXT_PUBLIC_MAXIMUN_FETCH_SIZE}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        popuralNews: {
            data: {
                articles: [],
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
        textToSearch: "",
        fetchingError: "",
        activeCategory: {
            category: "country",
            activeId: "all",
        },
        isFetching: true,
    },
    reducers: {
        loadPopuralNews: (state, action) => {
            state.popuralNews = action.payload;
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
        throwError: (state, action) => {
            state.fetchingError = action.payload;
        },
        setCurrentcategory: (state, action) => {
            state.activeCategory = {
                category: action.payload.category,
                activeId: action.payload.activeId,
            };
        },
        changeIsfetchingStatus: (state, action) => {
            state.isFetching = action.payload;
        },
    },
});

export const {
    loadPopuralNews,
    loadNewsItemById,
    changeVisibilityOfFullAtricle,
    updateTextToSearchwith,
    throwError,
    setCurrentcategory,
    changeIsfetchingStatus,
} = newsSlice.actions;
export default newsSlice.reducer;
