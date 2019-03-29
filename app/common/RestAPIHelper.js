const RestAPIHelper = {
    sendRestAPI(_url, _callback, _error, _params) {
        return fetch(_url)
            .then((response) => response.json())
            .then((responseJson) => {
                _callback(responseJson);
            })
            .catch((error) => {
                _error(error)
            });
    },
}
export default RestAPIHelper;