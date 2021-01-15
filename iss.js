const request = require('request');
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
      callback(null,IP)
    }
  });
}; 

const fetchCoordsByIP = function (ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when coordinates for IP. Response: ${body}`;
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

const fetchISSFlyOverTimes = function (coords,callback ) {
  request(`http://api.open-notify.org/iss-pass.json?lat=50.7033&lon=-119.2683`, (error, response,body) => {
    let times = JSON.parse(body).response
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (error){
      callback(error, null);
      return
    }

    callback(error, times);
  })
}

const nextISSTimesForMyLocation = function (callback){
  fetchMyIp((error,ip) => {
    if (error) {
      callback(error, null);
      return;
    }
    fetchCoordsByIP(ip, ((error, data) => {
      if (error){
        callback(error, null);
        return;
      } 
      fetchISSFlyOverTimes(data, ((error, times) => {
        
        if (error){
          console.log('This is an error', error);
          return;
        } else if (!error) {
          // console.log(times)
          times.forEach(function (d) { 
            var date = new Date(d['risetime'] * 1000);
            var duration = d['duration'];
            console.log(`Next pass at ${date.toString()} for ${duration} seconds!`);
          })
          // let date = new Date;
          // console.log(Date.now())
          // for (let i in times){
          //   console.log(times[i].risetime)
          }

          // console.log(times[0]);
          // console.log(dates)
        
      }))       
    }));
  });
}

  


module.exports = {
  fetchMyIp,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
}