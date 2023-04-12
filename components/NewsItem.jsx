import { useLazyGetNewsByPublishersQuery } from "@/services/news";
import { loadNewsItemById, loadPopuralNews, throwError } from "@/slices/news";
import { useDispatch } from "react-redux";

const NewsItem = ({
    author,
    description,
    urlToImage,
    title,
    id,
    publishedAt = "today",
    name,
}) => {
    const dispatch = useDispatch();
    const [trigger] = useLazyGetNewsByPublishersQuery();
    async function getNews(publisherId) {
        const NewsByPublisher = await trigger(publisherId);
        if (NewsByPublisher.isError) {
            dispatch(throwError(NewsByPublisher.error.message));
        } else dispatch(loadPopuralNews(NewsByPublisher));
    }
    return (
        <div className="flex w-full gap-3 p-2 overflow-hidden pb-3 mt-3 border-b-gray-300 rounded max-h-60">
            <div className="grid w-3/5 gap-2">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3 ">
                        <img
                            src={urlToImage}
                            alt="Author"
                            className="object-cover w-12 h-12 rounded-full"
                        />
                        <div className="grid">
                            <label className="font-bold">{author}</label>
                            <label className="text-sm italic">
                                {publishedAt}
                            </label>
                        </div>
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            getNews(id);
                        }}
                    >
                        {id}
                    </div>
                </div>
                <div
                    className="grid gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md"
                    onClick={() => {
                        dispatch(loadNewsItemById(title));
                    }}
                >
                    <span className="font-bold">{title.substring(0, 150)}</span>
                    <span className="">
                        {description} ...
                        <span className="text-gray-400 pl-2 font-bold">
                            Road more
                        </span>
                    </span>
                </div>
            </div>
            <div className="w-2/5">
                <img
                    src={urlToImage}
                    alt={title}
                    className="rounded-3xl object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default NewsItem;
