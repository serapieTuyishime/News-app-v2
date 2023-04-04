import React from "react";

const Navigation = () => {
    return (
        <div className="flex gap-6 items-center py-6">
            <input
                type="search"
                placeholder="Search by news articles "
                className="rounded-3xl px-4 py-2 border outline-none border-gray-400"
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
                Technology
            </label>
        </div>
    );
};

export default Navigation;
