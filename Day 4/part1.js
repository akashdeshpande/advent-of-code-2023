let strs = [
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"
  ]
  
  function getPoints(str) {
    let game = str.split(":")[0];
    let numbers = str.split(":")[1].trim();
  
    let numRegex = /\d+/g;
  
    let winNum = numbers.split("|")[0].trim().match(numRegex);
    let havNum = numbers.split("|")[1].trim().match(numRegex);
  
    console.log(winNum);
    console.log(havNum);
  
    let firstNum = true; 
    let total = 0;
    for(let i = 0; i < winNum.length; i++) {
  
      if(havNum.includes(winNum[i])) {
        if(firstNum) {
          total += 1;
          firstNum = false;
        } else {
          total *= 2;
        }
      }
    }
  
    console.log(total);
    return total;
  
  }
  
  function getTotal(strs) {
    let total = 0;
    for(let i = 0; i < strs.length; i++) {
      total += getPoints(strs[i]);
    }
    
    return total;
  }
  
  console.log(getTotal(strs));