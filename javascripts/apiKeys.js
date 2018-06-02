const owm = require('./owm');

const objectRequestKey = () => {
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

const objectRecieveKey = () => {
  objectRequestKey()
    .then((result) => {
      owm.setKey(result.owm.apiKey);
    })
    .catch((err) => {
      console.error('something broke', err);
    });
};

module.exports = objectRecieveKey;
