import { useEffect, useState } from "react";
import request from "../utils/request";
//import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/articles';

export const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setArticles)
    }, []);

    return { articles };
};
