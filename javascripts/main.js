const apiKeys = require('./apiKeys');
const owm = require('./owm');

setTimeout(owm.objectRecieveWeather, 1000);
apiKeys.initializer();
