import { updateTextToSearchwith } from "@/slices/news";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "./ui/Logo";
import { Category } from "./ui/Category";
import { newsCategories } from "@/mocks/categories";

const Navigation = () => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");
    return (
        <div className="grid md:flex gap-6 items-center py-6 max-w-7xl mx-auto justify-between">
            <Logo />
            <div className="flex gap-6 flex-wrap md:flex-none">
                {newsCategories.map((category, index) => {
                    return (
                        <Category
                            text={category}
                            key={`${category}-${index}`}
                        />
                    );
                })}
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
            </div>
        </div>
    );
};

export default Navigation;
