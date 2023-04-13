import { useLazyGetNewsByLanguageQuery } from "@/services/news";
import { loadPopuralNews, setCurrentcategory, throwError } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const LanguageItem = ({ text }) => {
    const currentcategory = useSelector((state) => state.news.activeCategory);

    const [trigger] = useLazyGetNewsByLanguageQuery();
    const dispatch = useDispatch();
    async function getNews(language) {
        const NewsByLanguage = await trigger(language);
        if (NewsByLanguage.isError) {
            dispatch(throwError(NewsByLanguage.error.message));
        } else {
            dispatch(loadPopuralNews(NewsByLanguage));
            dispatch(
                setCurrentcategory({ category: "language", activeId: text })
            );
        }
    }
    return (
        <label
            onClick={() => getNews(text)}
            className={`px-3 border-2 rounded-2xl hover:bg-gray-100 cursor-pointer ${
                currentcategory.category === "language" &&
                currentcategory.activeId === text
                    ? "border-gray-700 bg-gray-300"
                    : "border-gray-400"
            }  flex items-center`}
        >
            {text}
        </label>
    );
};

export default LanguageItem;
