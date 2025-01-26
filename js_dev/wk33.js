console.log("hello");
console.log(" love football");
let teams = ["man u","barca","leverkusen"];

// for(let i = 0; i< teams.length;i++) {
    //console.logs(teams[i]);
//  }

teams.forEach(function(team){
    let club = team.toUpperCase();
     console.log(club);
    });  
    
    // for (let team of teams) {
    //     console.log(team);  
    //}

    let uppercase teams = teams.map(function(team){
        return team.toUpperCase();
    })

    // console.log(uppercase_teams);
//function sum(a+b) {
  //  console.log(a+b);
//}

//let total = sum(10,10)
//console.log(total);

let player = 10;

if (player <= 15) {
    console.log("we are champions");
}