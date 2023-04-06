import { useLazyGetPopuralArticlesQuery } from "@/services/news";
import { loadPopuralNews } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const Logo = () => {
    const dispatch = useDispatch();

    const [trigger] = useLazyGetPopuralArticlesQuery();
    const popuralNewsUrl = useSelector((state) => state.news.popuralNewsUrl);

    async function waitForDataToBeLoaded() {
        const allData = await trigger(popuralNewsUrl);
        dispatch(loadPopuralNews(allData));
        console.log("data visible");
    }
    return (
        <label
            onClick={() => waitForDataToBeLoaded()}
            className="uppercase font-bold text-4xl cursor-pointer text-blue-400"
        >
            Logo
        </label>
    );
};

export default Logo;
