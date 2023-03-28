import { useGetTopPublishersQuery } from "@/services/news";
import news from "@/slices/news";
import Link from "next/link";
import React from "react";
import NewsContainer from "./NewsContainer";

const Publishers = () => {
    const AllPublishers = useGetTopPublishersQuery("");
    return (
        <div className="grid gap-3">
            <h1 className="text-2xl uppercase">Top 10 Publishers of the day</h1>
            {/* {JSON.stringify(AllPublishers.data.sources[0])} */}
            {/* {JSON.stringify(Object.keys(AllPublishers))} */}
            {AllPublishers.status === "fulfilled" ? (
                // <NewsContainer news={AllPublishers.data.sources} />
                <div className="grid grid-cols-5 gap-3">
                    {AllPublishers.data.sources.map((newsItem, index) => {
                        return (
                            <Link href={newsItem.url} key={newsItem.id}>
                                {newsItem.name}
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div>No</div>
            )}
        </div>
    );
};

export default Publishers;
