import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import FullNewsItem from "@/components/FullNewsItem";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <div className="flex h-screen">
            <div className="w-3/4 h-full pl-4 overflow-scroll">
                <Navigation />
                <FullNewsItem />
                <PopuralNews />
            </div>
            <div className="w-1/4 pl-2 ">
                <Publishers />
            </div>
        </div>
    );
}
