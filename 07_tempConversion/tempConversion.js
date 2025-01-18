const convertToCelsius = function(tempInFahrenheit) {
  return Math.round((tempInFahrenheit - 32) * (5/9) *10)/10
};

const convertToFahrenheit = function(tempIncelsius) {
  return Math.round(((tempIncelsius * (9/5)) + 32) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
