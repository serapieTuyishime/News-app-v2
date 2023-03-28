import React from "react";
import NewsItem from "./NewsItem";

const NewsContainer = ({ news = [] }) => {
    return (
        <div className="flex gap-4 flex-wrap">
            {news.map(
                (
                    { author, content, description, urlToImage, url, source },
                    index
                ) => {
                    return (
                        <div className="" key={index}>
                            <NewsItem
                                author={author}
                                content={content}
                                description={description}
                                urlToImage={urlToImage}
                                title={source.title}
                                url={url}
                            />
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default NewsContainer;
