import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews, throwError } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const PopuralNewsfetcher = ({ children }) => {
    const dispatch = useDispatch();

    const [trigger] = useLazyGetPopuralArticlesQuery();
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);

    async function waitForDataToBeLoaded() {
        const allData = await trigger(popuralNewsUrl);

        if (allData.isError) {
            dispatch(throwError(allData.error.data.message));
        } else dispatch(loadPopuralNews(allData));
    }

    return (
        <div
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => waitForDataToBeLoaded()}
        >
            {children}
        </div>
    );
};

export default PopuralNewsfetcher;
