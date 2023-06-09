import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import {
    changeIsfetchingStatus,
    loadPopuralNews,
    throwError,
} from "@/slices/news";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsContainer from "./NewsContainer";
import TitleElement from "./TitleElement";

const PopuralNews = () => {
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);
    const [trigger] = useLazyGetPopuralArticlesQuery();
    const dispatch = useDispatch();
    const currentcategory = useSelector((state) => state.news.activeCategory);

    async function waitForDataToBeLoaded() {
        dispatch(changeIsfetchingStatus(true));
        const allData = await trigger(popuralNewsUrl);
        dispatch(changeIsfetchingStatus(false));

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
        <div className="grid gap-4 mx-auto sm:w-3/4">
            <TitleElement
                title={`Displaying news by ${currentcategory.category} : ${currentcategory.activeId}`}
            />
            <NewsContainer />
        </div>
    );
};

export default PopuralNews;
