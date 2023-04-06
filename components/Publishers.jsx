import {
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
} from "@/services/news";
import { loadPopuralNews } from "@/slices/news";
import React from "react";
import { useDispatch } from "react-redux";

const Publishers = () => {
    const AllPublishers = useGetTopPublishersQuery("");
    const [trigger] = useLazyGetNewsByPublishersQuery();

    const dispatch = useDispatch();

    async function getNews(publisherId) {
        const NewsByPublisher = await trigger(publisherId);
        dispatch(loadPopuralNews(NewsByPublisher));
    }
    return (
        <div className="grid gap-3">
            <h1 className="text-2xl uppercase">Top 10 Publishers of the day</h1>
            {AllPublishers.isSuccess ? (
                <div className="grid gap-4">
                    {AllPublishers.data.sources
                        .slice(0, 30)
                        .map((publisher) => {
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
