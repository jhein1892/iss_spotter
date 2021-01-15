const request = require('request');
let IP = ''
const fetchMyIp = function (callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    IP = JSON.parse(body).ip;
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    } else {
      callback(null, IP);
    }
  });
};

const fetchCoordsByIP = function (ip, callback) {
  request(`https://freegeoip.app/json/6`, (error, response, body) => 
  {
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }


    let values = JSON.parse(body);
      let coords = {
      latitude: values.latitude,
      longitude: values.longitude
      };
    

    if (error) {
      callback(error, null)
    } else {
      callback(null, coords)
    }
  
  });
};

module.exports = {
  fetchMyIp,
  fetchCoordsByIP
}