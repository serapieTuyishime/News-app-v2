import React from "react";
import { useSelector } from "react-redux";

export default function OneNewsItem() {
    const currentNewsitem = useSelector((state) => state.news.currentNewsitem);
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
        <div className="flex flex-col gap-4">
            <label className="text-xl font-bold">{title}</label>
            <div className="grid">
                <label className="text-light">BY {author}</label>
                <label className="text-light">Updated on {publishedAt}</label>
            </div>
            <div className="h-[20rem] grid w-full">
                <img
                    src={urlToImage}
                    className="object-cover w-full h-full"
                    alt={source.id ? source.id : title}
                    width={400}
                    height={200}
                />
            </div>
            <label className="italic text-blue-300 text-light">
                {description}
            </label>
            <div className="text-red-400">{content}</div>
        </div>
    );
}
