import { useLazyGetNewsByPublishersQuery } from "@/services/news";
import { loadNewsItemById, loadPopuralNews } from "@/slices/news";
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
        const slugPublisherId = publisherId.toLowerCase().split(" ").join("-");
        const NewsByPublisher = await trigger(slugPublisherId);
        dispatch(loadPopuralNews(NewsByPublisher));
    }
    return (
        <div className="flex w-full gap-3 p-2 overflow-hidden pb-3 mt-3 border-b-gray-300 rounded max-h-60 hover:cursor-pointer">
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
                            getNews(name);
                        }}
                    >
                        {name}
                    </div>
                </div>
                <div
                    className="grid gap-3"
                    onClick={() => {
                        dispatch(loadNewsItemById(title));
                    }}
                >
                    <span className="font-bold">{title.substring(0, 150)}</span>
                    <span className="">
                        {/* {description.substring(0, 120)} ... */}
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
