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
    console.error(e);
    // const locationDom = $(e.target.id).('.weatherLocation');
    console.log(locationDom);
    const forecastToAdd = {
      location: 'testLocation',
      date: 'test date',
      temperature: 'test temp',
      conditions: 'test condtions',
      airPressure: 'test press',
      windSpeed: 'test wind',
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
