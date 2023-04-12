import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";

const NewsContainer = () => {
    const FetchNews = useSelector(
        (state) => state.news.popuralNews.data.articles
    );
    let news = [];
    const textToSearch = useSelector((state) => state.news.textToSearch);
    const errorText = useSelector((state) => state.news.fetchingError);
    if (textToSearch !== "") {
        news = FetchNews.filter((article) =>
            article.title.toLowerCase().includes(textToSearch.toLowerCase())
        );
    } else {
        news = FetchNews;
    }
    return (
        <div className="grid divide-y-2 gap-6">
            {errorText ? (
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
                <span className="font-bold text-4xl">No news to display</span>
            )}
        </div>
    );
};

export default NewsContainer;
