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
        <div className="grid items-center justify-between gap-6 py-6 mx-auto md:flex max-w-7xl">
            <div className="hidden md:flex">
                <Logo />
            </div>
            <div className="flex flex-wrap gap-6 md:flex-none">
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
                    className="px-4 py-2 border border-gray-400 outline-none rounded-3xl"
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
