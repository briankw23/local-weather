const domString = (weatherObject, whereToPrint) => {
  let string = '';
  string += `<div>`;
  string += `<h1>${weatherObject.name}</h1>`;
  string += `<img id='weatherIcon'src='http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Weather-icon.png'>`;
  string += `<h3>${weatherObject.main.temp} º</h3>`;
  string += `<h4>Conditions: ${weatherObject.weather[0].main}</h4>`;
  string += `<h4>Air pressure: ${weatherObject.main.pressure}</h4>`;
  string += `<h4>Wind Speed: ${weatherObject.wind.speed}mph</h4>`;
  string += `<h4>Forecast:</h4>`;
  string += `<button id="three" type="button" class="btn btn-default">3 - Day Forecast</button>`;
  string += `<button id="five" type="button" class="btn btn-default">5 - Day Forecast</button>`;

  string += `</div>`;
  printToDom(whereToPrint, string);
};

const printToDom = (whereToPrint, strang) => {
  $(`#${whereToPrint}`).html(strang);
};

module.exports = {
  domString,
};
