// var beerSong = function(beerNumber) {
//   for (var i = 99; i > 0; i -- 99) {
//     return "99 bottles of beer on the wall, 99 bottles of beer.";
//   }
// };
var beerSong = function(n) {
  for (n < 100; n >= 0; n--) {
    if (n === 99) {
      return (n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around, " + (n - 1) + " bottles of beer on the wall.");
    } else if (n === 1) {
      return (n + " bottle of beer on the wall, " + n + " bottle of beer. Take one down and pass it around, " + (n - 1) + " bottles of beer on the wall.");
    } else {
      return {

      }
    }
  }
};
