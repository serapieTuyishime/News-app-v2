import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews } from "@/slices/news";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullNewsItem from "./FullNewsItem";
import NewsContainer from "./NewsContainer";

const PopuralNews = () => {
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);
    const popuralNews = useSelector((state) => state.news.popuralNews);
    const [trigger, AllNews] = useLazyGetPopuralArticlesQuery();
    const dispatch = useDispatch();
    async function waitForDataToBeLoaded() {
        const allData = await trigger(popuralNewsUrl);
        dispatch(loadPopuralNews(allData));
    }
    return (
        <div>
            {
                AllNews.status === "uninitialized" ? (
                    <button
                        onClick={() => {
                            // trigger(popuralNewsUrl);
                            waitForDataToBeLoaded(popuralNewsUrl);
                        }}
                        className="px-3 py-1 bg-red-400"
                    >
                        Fetch news
                    </button>
                ) : AllNews.status === "fulfilled" ? (
                    <div>
                        {/* {JSON.stringify(
                            Object.values(AllNews.data.articles[0])
                        )} */}
                        <br />
                        <NewsContainer
                            news={AllNews.data.articles.slice(0, 10)}
                        />
                    </div>
                ) : null

                // <div>{JSON.stringify(AllNews)}</div>
            }
            <NewsContainer news={popuralNews.articles} />
            <FullNewsItem />
        </div>
    );
};

export default PopuralNews;
