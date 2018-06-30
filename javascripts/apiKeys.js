const owm = require('./owm');
const firebaseApi = require('./firebaseApi');

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
      firebase.initializeApp(result.firebase);
      firebaseApi.setConfig(result.firebase);
    })
    .catch((err) => {
      console.error('something broke', err);
    });
};

module.exports = objectRecieveKey;
