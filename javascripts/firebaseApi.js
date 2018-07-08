let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveWeather = (newWeather) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(newWeather),

    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getWeather = () => {
  const allWeatherArray = [];
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/weather.json`,
    })
      .done((allWeatherObject) => {
        if (allWeatherObject !== null) {
          Object.keys(allWeatherObject).forEach((fbkey) => {
            allWeatherObject[fbkey].id = fbkey;
            allWeatherArray.push(allWeatherObject[fbkey]);
          });
        }
        resolve(allWeatherArray);
        console.log(allWeatherArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const updateWeather = (weather, weatherId) => {

  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
      data: JSON.stringify(weather),
    })
      .done((scaryWeather) => {
        resolve(scaryWeather);
      })
      .fail((error) => {
        console.error(error);
      });
  });
};

const deleteWeather = (weatherId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveWeather,
  setConfig,
  getWeather,
  updateWeather,
  deleteWeather,
};
