const owm = require('./owm');
const firebaseApi = require('./firebaseApi');

let zip = '';

const pressEnter = () => {
  // keyPress Event
  $(document).keypress((e) => {
    zip = e.target.value;
    if (e.key === 'Enter' && Number.isInteger(parseInt(zip)) && zip.length === 5) {
      owm.objectRecieveCurrentWeather(zip);
    };
  });
};

const foreButtons = () => {
  $(document).click((e) => {
    if (e.target.id === 'five') {
      owm.objectRecieveForecastWeather(zip, 'five');
    } else if (e.target.id === 'three') {
      owm.objectRecieveForecastWeather(zip, 'three');
    }
  });
};

const saveForecastButton = () => {
  $(document).on('click','.saveForecast', (e) => {
    const domId = e.target.id;
    const locationDom = $(`.${domId}`).find('.weatherLocation').html();
    console.log(locationDom);
    const dateDom = $(`.${domId}`).find('.weatherDate').html();;
    console.log(dateDom);
    const temperatureDom = $(`.${domId}`).find('.weatherTemp').html();;;
    console.log(temperatureDom);
    const conditionsDom = $(`.${domId}`).find('.weatherCond').html();;;
    console.log(conditionsDom);
    const airPressureDom = $(`.${domId}`).find('.weatherAirPressure').html();;;
    console.log(airPressureDom);
    const windSpeedDom = $(`.${domId}`).find('.weatherWindSpeed').html();;;
    console.log(windSpeedDom);

    const forecastToAdd = {
      location: locationDom,
      date: dateDom,
      temperature: temperatureDom,
      conditions: conditionsDom,
      airPressure: airPressureDom,
      windSpeed: windSpeedDom,
      isScary: false,
    };
    firebaseApi.saveWeather(forecastToAdd)
      .then(() => {
      })
      .catch((error) => {
        console.error('error in saving weather', error);
      });
  });
};

const initializer = () => {
  pressEnter();
  foreButtons();
  saveForecastButton();
};

module.exports = initializer;
