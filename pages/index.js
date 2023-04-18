import Publishers from "@/components/Publishers";
import PopuralNews from "@/components/PopuralNews";
import Navigation from "@/components/Navigation";
import PopuralNewsfetcher from "@/components/HOC/PopuralNewsfetcher";
import TitleElement from "@/components/TitleElement";
import { countrycategories, languagecategories } from "@/mocks/categories";
import Country from "@/components/ui/Country";
import LanguageItem from "@/components/ui/LanguageItem";
import Logo from "@/components/ui/Logo";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigationVisibility } from "@/slices/news";

export default function Home() {
    const isNavigationVisible = useSelector(
        (state) => state.news.isNavigationVisible
    );

    const dispatch = useDispatch();

    return (
        <div className="grid h-screen gap-3">
            <div className="flex justify-between w-11/12 mx-auto sm:w-full">
                <div className="sticky top-0 hidden w-full sm:block">
                    <Navigation />
                </div>
                <div className="md:hidden">
                    <Logo />
                </div>
                <label className="w-10 h-8 ml-auto sm:hidden">
                    {isNavigationVisible ? (
                        /* The menu icon */
                        <span
                            onClick={() =>
                                dispatch(changeNavigationVisibility())
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
                        /* the cross icon*/
                        <span
                            onClick={() =>
                                dispatch(changeNavigationVisibility())
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
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </span>
                    )}
                </label>
            </div>
            <div id="news" className="flex items-start h-screen px-6">
                <div className="grid w-full">
                    <PopuralNews />
                </div>
                {/* mobile navigation */}
                <div
                    className={`w-4/5 sm:w-1/4 md:hidden gap-4 pl-2 ${
                        isNavigationVisible
                            ? "bg-blue-400 z-10 absolute grid "
                            : "hidden"
                    } `}
                >
                    <div className="sm:hidden">
                        <Navigation />
                    </div>
                    <PopuralNewsfetcher>
                        <TitleElement title="Fetch popural news" />
                    </PopuralNewsfetcher>
                    <TitleElement title="Languages" />
                    <div className="flex flex-wrap w-full gap-2 overflow-scroll">
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
                    <div className="flex flex-wrap w-full h-32 gap-2 overflow-scroll">
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
                {/* mobile navigation end here */}
                <div className="flex flex-col w-1/4 h-screen">
                    <div className="grid h-48">
                        <TitleElement title="Languages" />
                        <div className="flex flex-wrap items-center gap-2 overflow-scroll ">
                            {languagecategories.map((language, index) => {
                                return (
                                    <LanguageItem
                                        text={language}
                                        key={`${language}-${index}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid h-1/4">
                        <TitleElement title="Countries" />
                        <div className="flex flex-wrap gap-2 overflow-scroll">
                            {countrycategories.map((country, index) => {
                                return (
                                    <Country
                                        text={country}
                                        key={`${country}-${index}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex-grow overflow-scroll">
                        <Publishers />
                    </div>
                </div>
            </div>
        </div>
    );
}
