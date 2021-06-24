
var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var dadJokeAPIService = LocalServiceRegistry.createService('MagicCartridge.Dad.Service1', {
    createRequest: function (svc, params) {
        svc.setRequestMethod('GET');
        svc.addHeader('Accept', 'application/json');
        return params;
    },
    parseResponse: function (svc, httpClient) {
        var result;

        try {
            result = JSON.parse(httpClient.text);
        } catch (e) {
            result = httpClient.text;
        }
        return result;
    }
});

module.exports = {
    dadJokeAPIService: dadJokeAPIService
}
