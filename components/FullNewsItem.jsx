import Image from "next/image";
import React from "react";

const FullNewsItem = ({
    title,
    source,
    author,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
}) => {
    return (
        <div className="grid gap-4">
            <label className="font-bold text-xl">{title}</label>
            <div className="grid">
                <label className="text-light">BY {author}</label>
                <label className="text-light">Updated on {publishedAt}</label>
            </div>
            <div className="h-[20rem] w-full">
                <Image
                    src={url}
                    className="w-full h-full object-cover"
                    alt={source.id ? source.id : title}
                />
                <label className="text-light italic">{description}</label>
            </div>
            <div>{content}</div>
        </div>
    );
};

export default FullNewsItem;
