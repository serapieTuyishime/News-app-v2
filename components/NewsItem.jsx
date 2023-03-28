import React from "react";
import { useDispatch } from "react-redux";
import { loadNewsItemById } from "@/slices/news";

const NewsItem = ({
    author,
    content,
    description,
    urlToImage,
    title,
    url,
    id,
}) => {
    const dispatch = useDispatch();
    return (
        <div
            className="grid gap-3 h-96 w-56 border border-blue-400 rounded hover:cursor-pointer"
            onClick={() => dispatch(loadNewsItemById(id))}
        >
            <div className="h1/4 w-full">
                <img
                    src={urlToImage}
                    alt={title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="overflow-hidden text-ellipsis ">{description}</div>
            <div className="overflow-hidden text-ellipsis">{content}</div>
            <span className="font-bold text-2xl">{author}</span>
        </div>
    );
};

export default NewsItem;
