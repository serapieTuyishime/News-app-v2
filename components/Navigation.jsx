import { updateTextToSearchwith } from "@/slices/news";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const dispatch = useDispatch();
    const todayDate = useSelector((state) => state.news.todayDate);

    const [searchText, setSearchText] = useState("");
    return (
        <div className="flex gap-6 items-center place-content-center py-6">
            <input
                type="search"
                placeholder="Search by news articles "
                className="rounded-3xl px-4 py-2 border outline-none border-gray-400"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === "Enter")
                        dispatch(updateTextToSearchwith(searchText));
                }}
            />
            <label className="text-mute">Tags</label>
            <label
                className="bg-gray-200 rounded-full px-4 pt-1 pb-2 font-bold
            "
            >
                Politics
            </label>
            <label
                className="bg-gray-200 rounded-full px-4 pt-1 pb-2 font-bold
            "
            >
                Sports
            </label>
            <label
                className="bg-gray-200 rounded-full px-4 pt-1 pb-2 font-bold
            "
            >
                {todayDate}
            </label>
        </div>
    );
};

export default Navigation;
