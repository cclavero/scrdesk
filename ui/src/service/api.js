
class APIService {

    getInvConfig = (httpMethod, data) => {
        const invConfig =  {
            method: httpMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            invConfig.body = JSON.stringify(data);
        } /* else if {} */
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

    post = (url, urlParams, data) => {

        // TODO: URL PARAMS

        return this.invoke(url, this.getInvConfig('POST', data))
    };

}

export default APIService;