let strs = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
     ]
    
    let maxRgb = [12, 13, 14];
    
    function getGames(strs, maxRgb) {
    //   let rgbobj = {};
      let games = {}; // final games object which has chances associated with the game object id
      // using this like a hashmap
      let gameIdTotal = 0;
      
      for (let i = 0; i < strs.length; i++) {
        
        let fault = false; // fault flag is when drawn cubes > maxRgb limit
        
        let [game, chances] = strs[i].split(":"); // game = "Game 1", chances = "x red, y green z blue; a red, b green c blue"
        game = parseInt(game.trim().split(" ")[1]); // game id
        
        let draw = []; // draw is one chance, i.e. once time when the elf pulls out the cubes
        // format: [r, g, b] at index 0 1 2
        // r = idx 0, g = idx 1, b = idx 2
        
        chances = chances.trim();
        
        let chancesArray = chances.split(";");
        for(let j = 0; j < chancesArray.length; j++) { // calculate one draw
          if(chancesArray[j].trim() == "") continue; // ignore empty string, like game 6 end part "3 green;"
          
          let rgbChancesArray = chancesArray[j].trim().split(","); // split rgb
          let number = 0;
          let rgbArray = [0, 0, 0]; // [r, g, b]. this is in essence a draw
          
          for(let k = 0; k < rgbChancesArray.length; k++) {
    
            if(rgbChancesArray[k].includes("red")) {
              number = parseInt(rgbChancesArray[k].trim().split(" ")[0]);
              rgbArray[0] = number; // [number, x, x]
              if(number > maxRgb[0]) fault = true;
            }
            if(rgbChancesArray[k].includes("green")) {
                        number = parseInt(rgbChancesArray[k].trim().split(" ")[0]);
              rgbArray[1] = number; // // [x, number, x]
              if(number > maxRgb[1]) fault = true;
            }
            if(rgbChancesArray[k].includes("blue")) {
                        number = parseInt(rgbChancesArray[k].trim().split(" ")[0]);
              rgbArray[2] = number; // // [x, x, number]
              if(number > maxRgb[2]) fault = true;
            }
    
          }
          
    //       console.log(rgbArray);
          draw.push(rgbArray);
          
        }
        
    //     console.log(draw);
        if(!fault) {
            games[game] = draw; // games[game id] = [[r, g, b], [r, g, b], ...]
          gameIdTotal += game;
    //      	console.log(game); 
        }
        
      }
      
      console.log(games);
      return gameIdTotal;
      
    }
    
    
    console.log(getGames(strs, maxRgb));