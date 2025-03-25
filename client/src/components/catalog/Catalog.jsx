
import { useArticles } from "../../api/catalogApi";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const { articles } = useArticles();

    return (
        <section id="catalog-page">
            <h1>Всички статии</h1>

            {articles.length > 0
                ? articles.map(article => <CatalogItem key={article._id} {...article} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    );
}