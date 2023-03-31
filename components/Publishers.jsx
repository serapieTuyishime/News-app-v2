import {
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
} from "@/services/news";
import news, { loadPopuralNews } from "@/slices/news";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Publishers = () => {
    const AllPublishers = useGetTopPublishersQuery("");
    const [trigger] = useLazyGetNewsByPublishersQuery();

    const dispatch = useDispatch();

    async function getNews(publisherId) {
        const AllPublishers = await trigger(publisherId);
        dispatch(loadPopuralNews(AllPublishers));
    }
    return (
        <div className="grid gap-3">
            <h1 className="text-2xl uppercase">Top 10 Publishers of the day</h1>
            {AllPublishers.status === "fulfilled" ? (
                <div className="grid gap-4">
                    {AllPublishers.data.sources
                        .slice(0, 10)
                        .map((publisher, index) => {
                            return (
                                <div
                                    className="cursor-pointer"
                                    key={publisher.id}
                                    onClick={() => {
                                        getNews(publisher.id);
                                    }}
                                >
                                    {publisher.name}
                                </div>
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
