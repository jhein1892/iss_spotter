const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(body) {
  let myIp = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${myIp}`);
}

const fetchISSFlyOverTimes = function(body) {
  let latitude = JSON.parse(body).latitude
  let longitude = JSON.parse(body).longitude

  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;

  return request(url);
}

const nextISSTimesForMyLocation = function(){
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data)=> {
      const { response } = JSON.parse(data);
      return response; 
    })
}

module.exports = { 
nextISSTimesForMyLocation
};