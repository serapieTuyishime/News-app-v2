import { changeVisibilityOfFullAtricle } from "@/slices/news";
import { useDispatch, useSelector } from "react-redux";
import CustomLink from "./ui/CustomLink";

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
        <div className="grid w-full px-6 h-full">
            <div className={`flex flex-col gap-4 overflow-hidden`}>
                <label className="text-xl font-bold">{title}</label>
                <div className="grid">
                    <label className="font-light">BY {author}</label>
                    <label className="font-light ">
                        Updated on {publishedAt}
                    </label>
                </div>
                <div className="h-2/3">
                    <img
                        src={urlToImage}
                        className="object-cover w-full h-full"
                        alt={title}
                        width={400}
                        height={200}
                    />
                </div>
                <label className="italic font-light">{description}</label>
                <div className="">
                    {content.split("…")[0]}{" "}
                    <CustomLink linkingTo={url} newPage text="Road more" />
                </div>
            </div>
        </div>
    );
};

export default FullNewsItem;
