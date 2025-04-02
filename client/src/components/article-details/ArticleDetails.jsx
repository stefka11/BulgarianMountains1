import { Link, useNavigate, useParams } from "react-router";
import { useArticle, useDeleteArticle } from "../../api/catalogApi";
import useAuth from "../../hooks/useAuth";

export default function ArticleDetails(){
    const navigate = useNavigate();
    const { email, userId } = useAuth()
    const { articleId } = useParams();
    const { article } = useArticle(articleId);
    const { deleteArticle } = useDeleteArticle();
    //console.log(article);
    //console.log(article.img);
     
    const articleDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Сигурни ли сте, че искате да изтриете статията ${article.title} ?`);

        if (!hasConfirm) {
            return;
        }

        await deleteArticle(articleId);

        navigate('/catalog');
    };

    const isOwner = userId === article._ownerId;

    return (
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h2 className="text-xl font-bold tracking-tight text-gray-500 sm:text-2xl">
                    Регион {article.region}
                </h2>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {article.title}
                </h1>
                <p className="mt-4 text-2xl text-gray-500">
                    {article.opis}
                </p>
                <p className="mt-4 text-xl text-gray-500">
                    {article.kota}
                </p>
                <p className="mt-4 text-xl text-gray-500">
                    {article.description}
                </p>
              </div>

              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-120 w-160 overflow-hidden rounded-lg">
                            <img
                              alt={article.title}
                              src={article.img}
                              className="size-full object-cover"
                            />
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
    
                  {/* <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a> */}
                </div>
              </div>

              {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
              {isOwner && (
                    <div className="buttons"  style={{
                        display: 'flex', flexDirection: 'row'}}>
                        <div  style={{ backgroundColor: 'grey', padding: 10}}  border="2px" ><Link to={`/article/${articleId}/edit`} className="button">Edit</Link></div>
                        <div  style={{ backgroundColor: 'grey', padding: 10}}  border="2px" >
                        <button 
                            onClick={articleDeleteClickHandler}
                            className="button"
                            // style={{ backgroundColor: 'grey', padding: 10 }}
                            // border="2px" solid black
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      )
}