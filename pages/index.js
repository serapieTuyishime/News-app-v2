import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import FullNewsItem from "@/components/FullNewsItem";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <div className="grid gap-3 h-screen">
            <div className="top-0 sticky">
                <Navigation />
            </div>

            <div className="flex px-6 items-start overflow-scroll">
                <div className="grid sm:w-3/4 w-full">
                    <FullNewsItem />
                    <PopuralNews />
                </div>
                <div className="w-1/4 pl-2 hidden md:flex ">
                    <Publishers />
                </div>
            </div>
        </div>
    );
}
