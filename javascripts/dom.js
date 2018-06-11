const domString = (weatherObject, whereToPrint) => {
  let string = '';
  string += `<div class="row">`;
  string += `<div class="jumbotron">`;
  string += `<h1>${weatherObject.name}</h1>`;
  string += `<img id='weatherIcon'src='http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Weather-icon.png'>`;
  string += `<h3>${weatherObject.main.temp} º F</h3>`;
  string += `<h4>Conditions: ${weatherObject.weather[0].main}</h4>`;
  string += `<h4>Air pressure: ${weatherObject.main.pressure}</h4>`;
  string += `<h4>Wind Speed: ${weatherObject.wind.speed}mph</h4>`;
  string += `<h4>Forecast:</h4>`;
  string += `<button id="three" type="button" class="btn btn-default hide">3 - Day Forecast</button>`;
  string += `<button id="five" type="button" class="btn btn-default">5 - Day Forecast</button>`;
  string += `</div>`;
  string += `</div>`;
  printToDom(whereToPrint, string);
};

const printToDom = (whereToPrint, strang) => {
  $(`#${whereToPrint}`).html(strang);
};

const domStringForecast = (weatherObject, whereToPrint, days) => {
  let forecastList = [];
  forecastList = weatherObject.list;
  let string = '';
  string += `<div class="row">`;
  string += `<div class="col-md-8 center-block">`;
  string += `<table class="table table-striped table-bordered">`;
  string += `<tr class="text-center">`;
  string +=   `<th class="text-center">Location</th>`;
  string +=   `<th class="text-center">Date</th>`;
  string +=   `<th class="text-center">Temperature</th>`;
  string +=   `<th class="text-center">Conditions</th>`;
  string +=   `<th class="text-center" >Air Pressure</th>`;
  string +=   `<th class="text-center">Wind Speed</th>`;
  string +=   `<th class="text-center">My Weather</th>`;
  string += `</tr>`;
  string += `<tr>`;
  for (let i = 0; i < forecastList.length; i++) {
    string +=   `<td>${weatherObject.city.name}</td>`;
    string +=   `<td>${forecastList[i].dt_txt}</td>`;
    string +=   `<td>${forecastList[i].main.temp}  º F</td>`;
    string +=   `<td>${forecastList[i].weather[0].main}</td>`;
    string +=   `<td>${forecastList[i].main.pressure}</td>`;
    string +=   `<td>${forecastList[i].wind.speed}</td>`;
    string +=   `<td><button>Save</button></td>`;
    string += `</tr>`;
  }
  string += `</table>`;
  string += `</div>`;
  string += `</div>`;
  printToDom(whereToPrint, string);
};

module.exports = {
  domString,
  domStringForecast,
};
