import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import React from "react";
import { useSelector } from "react-redux";
import NewsContainer from "./NewsContainer";

const PopuralNews = () => {
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);
    const popuralNews = useSelector((state) => state.news.popuralNews);
    const [trigger, AllNews] = useLazyGetPopuralArticlesQuery();
    return (
        <div>
            {
                AllNews.status === "uninitialized" ? (
                    <button
                        onClick={() => trigger(popuralNewsUrl)}
                        className="bg-red-400 px-3 py-1"
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
        </div>
    );
};

export default PopuralNews;
