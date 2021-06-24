var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');
var Logger = require('dw/system/Logger');

var omdbapiJSON = LocalServiceRegistry.createService('omdbAPI', {
    
    createRequest: function (svc, params) {
        svc.setRequestMethod('GET');
        svc.addHeader('Accept', 'application/json');
        return params;
    },

    parseResponse: function(service, response) {              
            var result;
             result =  (response.text);
            return result;
    }
});
module.exports = {
    omdbapiJSON: omdbapiJSON
}