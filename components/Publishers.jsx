import {
    useGetTopPublishersQuery,
    useLazyGetNewsByPublishersQuery,
} from "@/services/news";
import { loadPopuralNews, setCurrentcategory, throwError } from "@/slices/news";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Publishers = () => {
    const AllPublishers = useGetTopPublishersQuery("");
    const [trigger] = useLazyGetNewsByPublishersQuery();

    const dispatch = useDispatch();
    const currentcategory = useSelector((state) => state.news.activeCategory);

    async function getNews(publisherId) {
        const NewsByPublisher = await trigger(publisherId);
        if (NewsByPublisher.isError) {
            dispatch(throwError(NewsByPublisher.error.message));
        } else {
            dispatch(loadPopuralNews(NewsByPublisher));
            dispatch(
                setCurrentcategory({
                    category: "publishers",
                    activeId: publisherId,
                })
            );
        }
    }
    return (
        <div className="grid gap-3">
            <h1 className="text-2xl uppercase">Top 10 Publishers of the day</h1>
            {AllPublishers.isSuccess ? (
                <div className="grid">
                    {AllPublishers.data.sources
                        .slice(0, 30)
                        .map((publisher) => {
                            return (
                                <div
                                    className={`flex justify-between cursor-pointer ${
                                        currentcategory.category ===
                                            "publishers" &&
                                        currentcategory.activeId ===
                                            publisher.id
                                            ? "border-gray-400 bg-gray-300"
                                            : "border-gray-400"
                                    } hover:bg-gray-100 p-3 rounded-2xl items-center`}
                                    key={publisher.id}
                                    onClick={() => {
                                        getNews(publisher.id);
                                    }}
                                >
                                    <div className="flex items-center gap-3 ">
                                        <div className="grid">
                                            <label className="font-bold">
                                                {publisher.name}
                                            </label>
                                            <label className="text-sm italic">
                                                country : {publisher.country}
                                            </label>
                                        </div>
                                    </div>
                                    <label className="cursor-pointer rounded-2xl flex items-center border-gray-500 border-2 px-3">
                                        Visit
                                    </label>
                                </div>
                            );
                        })}
                </div>
            ) : (
                <div>Wait while the Site fetches publishers for you</div>
            )}
        </div>
    );
};

export default Publishers;
