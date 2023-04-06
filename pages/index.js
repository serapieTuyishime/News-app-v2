import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import FullNewsItem from "@/components/FullNewsItem";
import Navigation from "@/components/Navigation";
import { useSelector } from "react-redux";

export default function Home() {
    const isFullArticleVisible = useSelector(
        (state) => state.news.isFullArticleVisible
    );
    return (
        <div className="grid gap-3 h-screen">
            <div className="top-0 sticky">
                <Navigation />
            </div>

            <div className="flex px-6 items-start overflow-scroll">
                <div className="grid w-full">
                    <div
                        className={`xl:w-4/5 bg-white  mx-auto ${
                            isFullArticleVisible ? "h-[75vh]" : "h-12"
                        }`}
                    >
                        <FullNewsItem />
                    </div>
                    <PopuralNews />
                </div>
                <div className="w-1/4 pl-2 hidden md:flex ">
                    <Publishers />
                </div>
            </div>
        </div>
    );
}
