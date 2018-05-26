const owm = require('./owm');

const objectRequest = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const objectRecieve = () => {
  objectRequest()
    .then((result) => {
      owm.setKey(result);
      console.log(result);
    })
    .catch((err) => {
      console.error('something broke', err);
    });
};

module.exports = objectRecieve;
