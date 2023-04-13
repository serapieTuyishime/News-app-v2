import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import Navigation from "@/components/Navigation";
import PopuralNewsfetcher from "@/components/HOC/PopuralNewsfetcher";
import TitleElement from "@/components/TitleElement";
import { countrycategories, languagecategories } from "@/mocks/categories";
import Country from "@/components/ui/Country";
import LanguageItem from "@/components/ui/LanguageItem";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Home() {
    const [isNavigationVisible, setisNavigationVisible] = useState(true);

    return (
        <div className="grid gap-3 h-screen">
            <div className="flex justify-between w-11/12 sm:w-full mx-auto">
                <div className="top-0 sticky hidden sm:block">
                    <Navigation />
                </div>
                <div className="md:hidden">
                    <Logo />
                </div>
                <label className=" ml-auto h-8 w-10 sm:hidden">
                    {isNavigationVisible ? (
                        /* The menu */
                        <span
                            onClick={() =>
                                setisNavigationVisible(!isNavigationVisible)
                            }
                        >
                            <svg
                                fill="#000000"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                            </svg>
                        </span>
                    ) : (
                        /* the cross */
                        <span
                            onClick={() =>
                                setisNavigationVisible(!isNavigationVisible)
                            }
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Menu / Menu_Alt_02">
                                    <path
                                        id="Vector"
                                        d="M11 17H19M5 12H19M11 7H19"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </svg>
                        </span>
                    )}
                </label>
            </div>
            <div className="flex px-6 items-start overflow-scroll">
                <div className="grid w-full">
                    <PopuralNews />
                </div>
                <div
                    className={`w-4/5 sm:w-1/4 pl-2 ${
                        isNavigationVisible
                            ? "bg-white z-10 absolute grid"
                            : "hidden"
                    } md:grid gap-4`}
                >
                    <div className="sm:hidden">
                        <Navigation />
                    </div>
                    <PopuralNewsfetcher>
                        <TitleElement title="Fetch popural news" />
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
                    <div className="h-32 w-full flex flex-wrap overflow-scroll gap-2">
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
