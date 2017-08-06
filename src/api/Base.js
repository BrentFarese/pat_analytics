export default class Base {
    
    static host = 'http://localhost:8080';

    static url(urlParams) {
        let url = `${Base.host}/${this.resource}`;
        if(urlParams) {
            url = `${url}/${urlParams}`;
        }
        return url;
    };

    static client(url, myInit) {
        return fetch(url, myInit);
    };

    static get(urlParams, myInit) {
        return new Promise((resolve, reject) => {
            return Base.client(this.url(urlParams), myInit)
                .then(response => resolve(response))
        })
    };

    static post(urlParams, myInit) {
        return new Promise((resolve, reject) => {
            return Base.client(this.url(urlParams), myInit)
                .then(response => resolve(response))
        })
    };


}