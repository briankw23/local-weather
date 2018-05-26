// api.openweathermap.org/data/2.5/weather?zip=37215,us&APPID=9cbf30b045df4f1dddd850a20251afb4

let key = '';

const setKey = (keyy) => {
  key = keyy;
  console.log(key);
};

module.exports = setKey;
