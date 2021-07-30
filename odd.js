// function isOdd(num){
//    return !(num%2===0);

// }
// console.log(isOdd(3));
// console.log(isOdd(4));
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let goodStations = [];

const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if ((stations[i][1] >= 20) && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}
chooseStations(stations);

