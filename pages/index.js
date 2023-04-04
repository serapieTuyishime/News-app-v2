import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import FullNewsItem from "@/components/FullNewsItem";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <div className="grid gap-3 ">
            <Navigation />

            <div className="flex h-screen">
                <div className="grid w-3/4">
                    <FullNewsItem />

                    <div className=" h-full pl-4 overflow-scroll">
                        <PopuralNews />
                    </div>
                </div>
                <div className="w-1/4 pl-2 ">{/* <Publishers /> */}</div>
            </div>
        </div>
    );
}
