import { changeVisibilityOfFullAtricle } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";

const FullNewsItem = () => {
    const currentNewsitem = useSelector((state) => state.news.currentNewsitem);
    const isFullArticleVisible = useSelector(
        (state) => state.news.isFullArticleVisible
    );
    const dispatch = useDispatch();
    const {
        title,
        source,
        author,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
    } = currentNewsitem;
    return (
        <div className="grid">
            <div
                className={`flex flex-col gap-4 overflow-hidden ${
                    isFullArticleVisible ? "h-[40rem]" : "h-12"
                }`}
            >
                <label className="text-xl font-bold">{title}</label>
                <div className="grid">
                    <label className="text-light">BY {author}</label>
                    <label className="text-light">
                        Updated on {publishedAt}
                    </label>
                </div>
                <div className="h-[20rem] grid w-full">
                    <img
                        src={urlToImage}
                        className="object-cover w-full h-full"
                        alt={title}
                        width={400}
                        height={200}
                    />
                </div>
                <label className="italic text-blue-300 text-light">
                    {description}
                </label>
                <div className="text-red-400">{content}</div>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-400 py-3 grid place-content-center">
                <label
                    className="bg-green-300 rounded-full p-4"
                    onClick={() => dispatch(changeVisibilityOfFullAtricle())}
                >
                    Up
                </label>
            </div>
        </div>
    );
};

export default FullNewsItem;
