const owm = require('./owm');

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
      owm.objectRecieveForecastWeather(zip);
    } else if (e.target.id === 'three') {
      owm.objectRecieveForecastWeather(zip);
    }
  });
};

const initializer = () => {
  pressEnter();
  foreButtons();
};

module.exports = initializer;
