import { useSelector } from "react-redux";
import PopuralNewsfetcher from "../HOC/PopuralNewsfetcher";

const Logo = () => {
    return (
        <PopuralNewsfetcher>
            <label className="uppercase font-bold text-4xl cursor-pointer text-blue-400">
                Logo
            </label>
        </PopuralNewsfetcher>
    );
};

export default Logo;
