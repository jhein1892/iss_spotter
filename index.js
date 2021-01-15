const {fetchMyIp} = require('./iss');
const {fetchCoordsByIP} = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss')
const {nextISSTimesForMyLocation} = require('./iss')

// fetchMyIp((error,ip) => {
//   myIp = ip;
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP", ip);
// });
  
// fetchCoordsByIP('64.180.4.93', ((error, data) => {
//   if (error){
//     console.log('This is an error', error);
//     return;
//   } else if (!error) {
//     console.log('It woked still!', data);
//   }
// }))
// let coords = {
//   latitude: 50.7033,
//   longitude: -119.2683
// };

// fetchISSFlyOverTimes(coords, ((error, data) => {
//   if (error){
//     console.log('This is an error', error);
//     return;
//   } else if (!error) {
//     console.log('It still worked!', data);
//   }
// }))

nextISSTimesForMyLocation((error,passTimes) => {
  if (error){
    return console.log("it didn't work!", error)
  }

  console.log(passTimes);
})

//it workeds still! null