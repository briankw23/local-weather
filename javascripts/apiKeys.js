const owm = require('./owm');

const objectRequest = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const objectRecieve = () => {
  objectRequest()
    .then((result) => {
      owm.setKey(result.owm.apiKey);
    })
    .catch((error) => {
      console.error('something broke', error);
    });
};

const initializer = () => {
  objectRecieve();
};

module.exports = {
  initializer,
};
