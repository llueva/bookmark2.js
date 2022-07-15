//variables 

var track = getColumn("spotifyData", "Track Name");

// track function

function getName(trackName){
  for (var i=0; i < track.length; i++){
    if (trackName == track[i]){
      return track[i];
    }
  }
}

console.log("Bertahan Terluka(1)");
console.log("Stay Alive (Prod. SUGA of BTS)(12)");
console.log("Something In The Way - Remastered(26)");