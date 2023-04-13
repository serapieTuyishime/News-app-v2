import { useLazyGetNewsByCategoryQuery } from "@/services/news";
import { loadPopuralNews, setCurrentcategory, throwError } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

export const Category = ({ text }) => {
    const currentcategory = useSelector((state) => state.news.activeCategory);

    const [trigger] = useLazyGetNewsByCategoryQuery();
    const dispatch = useDispatch();
    async function getNews(language) {
        const NewsByCategory = await trigger(language);
        if (NewsByCategory.isError) {
            dispatch(throwError(NewsByCategory.error.message));
        } else {
            dispatch(loadPopuralNews(NewsByCategory));
            dispatch(
                setCurrentcategory({ category: "category", activeId: text })
            );
        }
    }
    return (
        <label
            onClick={() => getNews(text)}
            className={`${
                currentcategory.category === "category" &&
                currentcategory.activeId === text
                    ? "border-gray-400 bg-gray-300"
                    : "border-gray-400 bg-gray-100"
            } rounded-full px-4 hover:bg-gray-300 flex items-center font-semibold capitalize`}
        >
            {text}
        </label>
    );
};
