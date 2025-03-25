export const request = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    };

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,   //за да не се затрият други хедъри
            },
            body: JSON.stringify(data),
        };
    }

    //try {
        const response = await fetch(url, options);
        const responceContentType = response.headers.get('Content-Type');
        //console.log(response.headers.get('Content-Type'));
        if (!responceContentType){
            return;
        }

        const result = await response.json();
        return result;
    //} catch (){

   // }
    
};

export default {  //преисползваме функцията за да подадем минимум параметри
    get: request.bind(null, 'GET'),  //паршъл апликейшън
    // get: (...params) => request('GET', ...params) - това е bind-извиква request, дава първи параметър GET и оставя всички други 
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}