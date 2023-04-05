import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews } from "@/slices/news";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsContainer from "./NewsContainer";
import TitleElement from "./TitleElement";

const PopuralNews = () => {
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);
    const [trigger] = useLazyGetPopuralArticlesQuery();
    const dispatch = useDispatch();

    async function waitForDataToBeLoaded() {
        const allData = await trigger(popuralNewsUrl);
        dispatch(loadPopuralNews(allData));
    }

    useEffect(() => {
        waitForDataToBeLoaded();
    }, []);
    return (
        <div className="grid gap-4">
            <TitleElement title="Popural news" />
            <NewsContainer />
        </div>
    );
};

export default PopuralNews;
