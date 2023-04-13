import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import FullNewsItem from "@/components/FullNewsItem";
import Navigation from "@/components/Navigation";
import { useSelector } from "react-redux";
import PopuralNewsfetcher from "@/components/HOC/PopuralNewsfetcher";
import TitleElement from "@/components/TitleElement";
import { countrycategories, languagecategories } from "@/mocks/categories";
import Country from "@/components/ui/Country";
import LanguageItem from "@/components/ui/LanguageItem";

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
                <div className="w-1/4 pl-2 hidden md:grid gap-4">
                    <PopuralNewsfetcher>
                        <TitleElement title="fetch popural news" />
                    </PopuralNewsfetcher>
                    <TitleElement title="Languages" />
                    <div className="h-32 w-full  flex flex-wrap overflow-scroll gap-2">
                        {languagecategories.map((language, index) => {
                            return (
                                <LanguageItem
                                    text={language}
                                    key={`${language}-${index}`}
                                />
                            );
                        })}
                    </div>
                    <TitleElement title="Countries" />
                    <div className="h-32 w-full  flex flex-wrap overflow-scroll gap-2">
                        {countrycategories.map((country, index) => {
                            return (
                                <Country
                                    text={country}
                                    key={`${country}-${index}`}
                                />
                            );
                        })}
                    </div>

                    <Publishers />
                </div>
            </div>
        </div>
    );
}
