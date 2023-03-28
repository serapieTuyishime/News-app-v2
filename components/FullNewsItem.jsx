import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const FullNewsItem = () => {
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
        <div className="grid gap-4">
            <label className="font-bold text-xl">{title}</label>
            <div className="grid">
                <label className="text-light">BY {author}</label>
                <label className="text-light">Updated on {publishedAt}</label>
            </div>
            <div className="h-[20rem] w-full">
                <img
                    src={urlToImage}
                    className="w-full h-full object-cover"
                    alt={source.id ? source.id : title}
                    width={400}
                    height={200}
                />
                <label className="text-light italic">{description}</label>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default FullNewsItem;
