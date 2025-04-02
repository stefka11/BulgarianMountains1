import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/articles';

export const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setArticles)
    }, []);

    return { articles };
};

export const useArticle = (articleId) => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        request.get(`${baseUrl}/${articleId}`)
            .then(setArticle)
    }, [articleId]);

    return { article };
};


export const useCreateArticle = () => {
    const { request  } = useAuth();
    //console.log(request);
    
    const create = (articleData) =>
        request.post(baseUrl, articleData);
    return {
        create,
    }
};
export const useEditArticle = () => {
    const { request } = useAuth();

    const edit = (articleId, articleData) =>
        request.put(`${baseUrl}/${articleId}`, { ...articleData, _id: articleId });
    return {
        edit,
    }
};
export const useDeleteArticle = () => {
    const { request } = useAuth();

    const deleteArticle = (articleId) =>
        request.delete(`${baseUrl}/${articleId}`);

    return {
        deleteArticle,
    }
};