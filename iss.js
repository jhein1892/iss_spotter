const request = require('request');

const fetchMyIp = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    let IP = JSON.parse(body);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${reponse.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    } else {
      callback(null, IP.ip);
    }
  });
};

module.exports = fetchMyIp;