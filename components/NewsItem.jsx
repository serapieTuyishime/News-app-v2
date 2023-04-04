import React from "react";
import { loadNewsItemById } from "@/slices/news";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    const router = useRouter();
    return (
        <div
            onClick={() => {
                dispatch(loadNewsItemById(title));
                // router.push("/news/OneNewsItem");
            }}
            className="flex w-full gap-3 p-2 overflow-hidden border border-blue-400 rounded max-h-56 hover:cursor-pointer"
        >
            <div className="grid w-3/5 gap-2">
                <div className="flex gap-3">
                    <label>
                        <img
                            src={urlToImage}
                            alt="Author"
                            className="object-cover w-12 h-12 rounded-full"
                        />
                    </label>
                    <div className="grid">
                        <label className="font-bold">{author}</label>
                        <label className="text-sm italic">{publishedAt}</label>
                    </div>
                </div>
                <div className="grid gap-3">
                    <span className="font-bold">{title}</span>
                    <span className="">{description}</span>
                </div>
            </div>
            <div className="w-2/5">
                <img
                    src={urlToImage}
                    alt={title}
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    );
};

export default NewsItem;
