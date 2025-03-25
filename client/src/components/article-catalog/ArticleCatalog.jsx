import { useArticles } from "../../api/ArticleApi";
import ArticleCatalogItem from "./article-catalog-item/ArticleCatalogItem";

export default function GameCatalog() {
    const { articles } = useArticles();

    return (
        <section id="catalog-page">
            <h1>Всички статии</h1>

            {articles.length > 0
                ? articles.map(article => <ArticleCatalogItem key={article._id} {...article} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}