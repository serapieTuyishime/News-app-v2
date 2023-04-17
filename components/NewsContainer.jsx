import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";
import NewsItemSkeleton from "./Skeletons/NewsItemSkeleton";

const NewsContainer = () => {
    const FetchNews = useSelector(
        (state) => state.news.popuralNews.data.articles
    );
    let news = [];
    const textToSearch = useSelector((state) => state.news.textToSearch);
    const errorText = useSelector((state) => state.news.fetchingError);

    const isFetching = useSelector((state) => state.news.isFetching);
    if (textToSearch !== "") {
        news = FetchNews.filter((article) =>
            article.title.toLowerCase().includes(textToSearch.toLowerCase())
        );
    } else {
        news = FetchNews;
    }
    return (
        <div className="grid gap-6 divide-y-2">
            {!isFetching ? (
                errorText ? (
                    <div>{errorText}</div>
                ) : news.length !== 0 ? (
                    news.map(
                        (
                            {
                                author,
                                title,
                                description,
                                urlToImage,
                                url,
                                source,
                                publishedAt,
                            },
                            index
                        ) => {
                            return (
                                <div className="" key={index}>
                                    <NewsItem
                                        author={author}
                                        description={description}
                                        urlToImage={urlToImage}
                                        title={title}
                                        id={source.id}
                                        name={source.name}
                                        source={source}
                                        publishedAt={publishedAt}
                                    />
                                </div>
                            );
                        }
                    )
                ) : (
                    <span className="text-4xl font-bold">
                        No news to display
                    </span>
                )
            ) : (
                [0, 1, 2, 3, 4, 5].map((number, index) => {
                    return <NewsItemSkeleton key={`${number}-${index}`} />;
                })
            )}
        </div>
    );
};

export default NewsContainer;
