import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";

const NewsContainer = () => {
    const FetchNews = useSelector((state) =>
        state.news.popuralNews.data.articles.slice(0, 10)
    );
    let news = FetchNews;
    const textToSearch = useSelector((state) => state.news.textToSearch);
    if (textToSearch !== "") {
        news = FetchNews.filter((article) =>
            article.title.toLowerCase().includes(textToSearch.toLowerCase())
        );
    }
    return (
        <div className="flex flex-wrap gap-4">
            {/* {JSON.stringify(Object.keys(news[0]))} */}
            {news.map(
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
                                publishedAt={publishedAt}
                            />
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default NewsContainer;
