const owm = require('./owm');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

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
  $(document).on('click', '.saveForecast', (e) => {

    const domId = e.target.id;

    const locationDom = $(`.${domId}`).find('.weatherLocation').html();

    const dateDom = $(`.${domId}`).find('.weatherDate').html();;

    const temperatureDom = $(`.${domId}`).find('.weatherTemp').html();;;

    const conditionsDom = $(`.${domId}`).find('.weatherCond').html();;;

    const airPressureDom = $(`.${domId}`).find('.weatherAirPressure').html();;;

    const windSpeedDom = $(`.${domId}`).find('.weatherWindSpeed').html();;;

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

const myWeatherEvent = () => {
  $(document).on('click', '#myWeather', (e) => {

    firebaseApi.getWeather()
      .then((weather) => {
        dom.domStringMyWeather(weather, 'weatherSaved');
      })
      .catch((error) => {
        console.error('cant get all weather', error);
      });
  });
};

const updateScaryButton = () => {
  $(document).on('click', '.updateForecast', (e) => {

    const domId = e.target.dataset['fireId'];

    const locationDom = $(`.${domId}`).find('.weatherLocation').html();

    const dateDom = $(`.${domId}`).find('.weatherDate').html();;

    const temperatureDom = $(`.${domId}`).find('.weatherTemp').html();;;

    const conditionsDom = $(`.${domId}`).find('.weatherCond').html();;;

    const airPressureDom = $(`.${domId}`).find('.weatherAirPressure').html();;;

    const windSpeedDom = $(`.${domId}`).find('.weatherWindSpeed').html();;;

    const scaryDom = $(`.${domId}`).find('.weatherIsScary').html();
    let scaryy = false;
    const scary = (boo) => {
      if (boo === 'Not Scary') {
        scaryy = true;
      } else if (scaryDom === 'Scary') {
        scaryy = false;
      } else {
        scaryy = false;
      }
    };
    scary(scaryDom);
    const forecastToUpdate = {
      location: locationDom,
      date: dateDom,
      temperature: temperatureDom,
      conditions: conditionsDom,
      airPressure: airPressureDom,
      windSpeed: windSpeedDom,
      isScary: scaryy,
    };

    firebaseApi.updateWeather(forecastToUpdate, domId)
      .then(() => {
        firebaseApi.getWeather()
          .then((weather) => {
            dom.domStringMyWeather(weather, 'weatherSaved');
          })
          .catch((error) => {
            console.error('cant get all weather', error);
          });
      })
      .catch((error) => {
        console.error('error in updating weather', error);
      });
  });
};

const initializer = () => {
  pressEnter();
  foreButtons();
  saveForecastButton();
  myWeatherEvent();
  updateScaryButton();
};

module.exports = initializer;
