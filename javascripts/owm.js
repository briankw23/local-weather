const dom = require('./dom');

let key = '';

const setKey = (keyy) => {
  key = keyy;
};

const objectRequestCurrentWeather = (zipCD) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCD},us&APPID=${key}&units=imperial`)
      .done((results) => {
        resolve(results);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const objectRecieveCurrentWeather = (zippy) => {
  objectRequestCurrentWeather(zippy)
    .then((results) => {
      dom.domString(results,'weather');
    })
    .catch((err) => {
      console.error('something broke weather', err);
    });
};

const objectRequestForecastWeather = (zipCD) => {
  return new Promise((resolve, reject) => {
    console.log(key);
    console.log(zipCD);
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCD},us&APPID=${key}&units=imperial`)
      .done((results) => {
        resolve(results);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const objectRecieveForecastWeather = (zippy) => {
  objectRequestForecastWeather(zippy)
    .then((results) => {
      console.error('FORE', results);
    })
    .catch((err) => {
      console.error('something broke weather', err);
    });
};

module.exports = {
  objectRecieveCurrentWeather,
  objectRecieveForecastWeather,
  setKey,
};
