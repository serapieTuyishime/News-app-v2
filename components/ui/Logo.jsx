import { useSelector } from "react-redux";
import PopuralNewsfetcher from "../HOC/PopuralNewsfetcher";

const Logo = () => {
    const errorText = useSelector((state) => state.news.fetchingError);
    return (
        <PopuralNewsfetcher>
            <label className="uppercase font-bold text-4xl cursor-pointer text-blue-400">
                errorText
            </label>
        </PopuralNewsfetcher>
    );
};

export default Logo;
