import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews, throwError } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const PopuralNewsfetcher = ({ children }) => {
    const dispatch = useDispatch();

    const [trigger] = useLazyGetPopuralArticlesQuery();
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);

    async function waitForDataToBeLoaded() {
        try {
            const allData = await trigger(popuralNewsUrl);
            dispatch(loadPopuralNews(allData));
        } catch (Error) {
            console.log(Object.keys(Error));
            dispatch(throwError("Error boom"));
        }
    }

    return <div onClick={() => waitForDataToBeLoaded()}>{children}</div>;
};

export default PopuralNewsfetcher;
