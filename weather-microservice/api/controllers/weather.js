'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  getWeatherByCity: getWeatherByCity
}

function getWeatherByCity(req, res) {
  var city = req.swagger.params.city.value;
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=5486281ad4f41c5ab0de20685d76dc38";
  console.log('Executing request: '+url);
  request.get(url).pipe(res);
  };
