
class APIService {

    /*
    constructor() {
    }
    */

    getInvConfig = (httpMethod) => {
        const invConfig =  {
            method: httpMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        // TODO: POST, PUT, DELETE
        /*
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
        */

        return invConfig;
    };

    invoke = (url, invConfig) => {
        const resultProm = fetch(url, invConfig)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    const error = '[ HTTP status: ' + response.status + ' / ' + response.statusText + ' ]: ' + response.url;
                    throw new Error(error);
                }
            })
            .then((json) => {
                return {data: json.data, error: null};
            })
            .catch((error) => {
                const errorMessage = 'Error: ' + error.message;
                return {data: {}, error: errorMessage};
            });

        return resultProm;
    };

    get = (url, urlParams) => {

        // TODO: URL PARAMS

        return this.invoke(url, this.getInvConfig('GET'));
    };

}

export default APIService;