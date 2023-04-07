import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews, throwError } from "@/slices/news";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsContainer from "./NewsContainer";
import TitleElement from "./TitleElement";

const PopuralNews = () => {
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);
    const [trigger] = useLazyGetPopuralArticlesQuery();
    const dispatch = useDispatch();
    const FetchNews = useSelector(
        (state) => state.news.popuralNews.data.articles
    );

    async function waitForDataToBeLoaded() {
        const allData = await trigger(popuralNewsUrl);

        if (allData.isError) {
            dispatch(throwError(allData.error.data.message));
        } else {
            dispatch(loadPopuralNews(allData));
        }
    }

    useEffect(() => {
        waitForDataToBeLoaded();
    }, []);
    return (
        <div className="grid sm:w-3/4 mx-auto gap-4">
            <TitleElement title="Popural news" />
            <NewsContainer />
        </div>
    );
};

export default PopuralNews;
