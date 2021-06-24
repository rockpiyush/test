var server = require('server');
var service = require('*/cartridge/controllers/omdb11');
var Logger = require('dw/system/Logger');

server.get('Start', function (req, res, next) {
    
    var properties = {};
    var template = 'omdb';

    var url = service.omdbapiJSON.getURL();
    Logger.warn('url '+url);
    var posturl = '?i=tt3896198&apikey=9abfc6d4';

    service.omdbapiJSON.setURL(url+posturl);
    var svcResult = service.omdbapiJSON.call();

  
    properties.data = svcResult.object;
    if (svcResult.status === 'OK') {
        
        Logger.warn('svcResult1' +svcResult);
    }

    else{
       Logger.warn('errorrrr');
    }
    res.render(template, properties);
    next();
});



module.exports = server.exports();