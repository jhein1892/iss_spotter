const {fetchMyIp} = require('./iss');
const {fetchCoordsByIP} = require('./iss');


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

//it workeds still! null