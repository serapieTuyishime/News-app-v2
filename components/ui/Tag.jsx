import React from "react";

export const Tag = ({ text }) => {
    return (
        <label className="bg-gray-200 rounded-full px-4 pt-1 pb-2 font-bold capitalize">
            {text}
        </label>
    );
};
