import { useArticles } from "../../api/catalogApi";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const { articles } = useArticles();

    return (
        <section id="catalog-page">
            {/* <h1>Всички статии</h1> */}
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Колекция</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

                        {articles.length > 0
                            ? articles.map(article => <CatalogItem key={article._id} {...article} />)
                            : <h3 className="no-articles">No articles yet</h3>
                        }

                        {/* {articles.length > 0
                            ? articles.map((article) => (
                                <div key={article.title} className="group relative">
                                    <img
                                        src={article.img}
                                        // className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                                        width="300px" height="600px"
                                    />

                                    <p className="text-base font-semibold text-gray-900">{article.title} - {article.opis}</p>
                                </div>
                            ))
                            : <h3 className="no-articles">No articles yet</h3>
                        } */}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}