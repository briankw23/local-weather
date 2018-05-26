let key = '';

const setKey = (keyy) => {
  key = keyy;
  console.error('key', key);
};

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
      setKey(result.owm.apiKey);
    })
    .catch((error) => {
      console.error('something broke', error);
    });
};

const initializer = () => {
  objectRecieve();
};

module.exports = initializer;
