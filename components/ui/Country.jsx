import { useLazyGetNewsByCountryQuery } from "@/services/news";
import { loadPopuralNews, setCurrentcategory, throwError } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const Country = ({ text }) => {
    const currentcategory = useSelector((state) => state.news.activeCategory);

    const [trigger] = useLazyGetNewsByCountryQuery();
    const dispatch = useDispatch();
    async function getNews(language) {
        const NewsByLanguage = await trigger(language);
        if (NewsByLanguage.isError) {
            dispatch(throwError(NewsByLanguage.error.message));
        } else {
            dispatch(loadPopuralNews(NewsByLanguage));
            dispatch(
                setCurrentcategory({ category: "country", activeId: text })
            );
        }
    }
    return (
        <label
            onClick={() => getNews(text)}
            className={`px-3 border-2 hover:bg-gray-100 cursor-pointer rounded-2xl ${
                currentcategory.category === "country" &&
                currentcategory.activeId === text
                    ? "border-gray-700 bg-gray-300"
                    : "border-gray-400"
            } flex items-center`}
        >
            {text}
        </label>
    );
};

export default Country;
