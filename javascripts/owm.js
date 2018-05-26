let key = '';

const setKey = (keyy) => {
  key = keyy;
  console.error('key', key);
};

const objectRequestWeather = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`api.openweathermap.org/data/2.5/weather?zip=37215,us&APPID=${key}`)
      .done((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const objectRecieveWeather = () => {
  objectRequestWeather()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('something broke weather', error);
    });
};

module.exports = {
  objectRecieveWeather,
  setKey,
};
