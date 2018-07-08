const domString = (weatherObject, whereToPrint) => {
  let string = '';
  string += `<div class="row">`;
  string += `<div class="jumbotron">`;
  string += `<h1>${weatherObject.name}</h1>`;
  string += `<img id='weatherIcon'src='http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Weather-icon.png'>`;
  string += `<h3>${weatherObject.main.temp} º F</h3>`;
  string += `<h4>Conditions: ${weatherObject.weather[0].main}</h4>`;
  string += `<h4>Air pressure: ${weatherObject.main.pressure}</h4>`;
  string += `<h4>Wind Speed: ${weatherObject.wind.speed} MPH</h4>`;
  string += `<h4>Forecast:</h4>`;
  string += `<button id="five" type="button" class="btn btn-danger">5 - Day Forecast</button>`;
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
  string += `<div class="col-md-8 col-md-offset-2">`;
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

  for (let i = 0; i < forecastList.length; i += 8) {
    string += `<div class="weatherRow">`;
    string += `<tr class='${i + 1}'>`;
    string +=   `<td class="weatherLocation">${weatherObject.city.name}</td>`;
    string +=   `<td class="weatherDate">${forecastList[i].dt_txt}</td>`;
    string +=   `<td class="weatherTemp">${forecastList[i].main.temp}  º F</td>`;
    string +=   `<td class="weatherCond">${forecastList[i].weather[0].main}</td>`;
    string +=   `<td class="weatherAirPressure">${forecastList[i].main.pressure}</td>`;
    string +=   `<td class="weatherWindSpeed">${forecastList[i].wind.speed} MPH</td>`;
    string +=   `<td><button id="${i + 1}" class="saveForecast btn btn-success">Save</button></td>`;
    string += `</tr>`;
    string += `</div>`;
  }
  string += `</table>`;
  string += `</div>`;
  string += `</div>`;
  printToDom(whereToPrint, string);
};

const domStringMyWeather = (weatherArray, whereToPrint) => {
  let string = '';
  string += `<div class="row">`;
  string += `<div class="col-md-8 col-md-offset-2">`;
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

  for (let i = 0; i < weatherArray.length; i++) {
    string += `<div class="weatherRow">`;
    string += `<tr class='${weatherArray[i].id}'>`;
    string +=   `<td class="weatherLocation">${weatherArray[i].location}</td>`;
    string +=   `<td class="weatherDate">${weatherArray[i].date}</td>`;
    string +=   `<td class="weatherTemp">${weatherArray[i].temperature}</td>`;
    string +=   `<td class="weatherCond">${weatherArray[i].conditions}</td>`;
    string +=   `<td class="weatherAirPressure">${weatherArray[i].airPressure}</td>`;
    string +=   `<td class="weatherWindSpeed">${weatherArray[i].windSpeed}</td>`;
    string +=   `<td><button id="${weatherArray[i].id}" data-fire-id="${weatherArray[i].id}" class="deleteForecast btn btn-danger btn-xs">Delete</button>`;
    string +=   `<button id="${i + 1}" data-fire-id="${weatherArray[i].id}" data-scary="${weatherArray[i].isScary}"class="updateForecast weatherIsScary btn btn-warning btn-xs">${scary(weatherArray[i].isScary)}</button></td>`;
    string += `</tr>`;
    string += `</div>`;
  }
  string += `</table>`;
  string += `</div>`;
  string += `</div>`;

  printToDom(whereToPrint, string);
};

const scary = (boo) => {
  return (boo === true) ? 'Scary' : 'Not Scary';
};

module.exports = {
  domString,
  domStringForecast,
  domStringMyWeather,
};
