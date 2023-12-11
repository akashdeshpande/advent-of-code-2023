let strs = [
    "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen"
  ]
  
  function getDigits(str) {
    let numStr = [];
      for(let i = 0; i < str.length; i++) {
      if(str[i] >= '0' && str[i] <= '9'){
        numStr.push(str[i]);
      }
    }
    return parseInt(
        numStr[0] + numStr[numStr.length - 1]
    );
  }
  
  // match
  function convStrToNum(str) {
    let numStr = [];
    
    for(let i = 0; i < str.length; i++) {
      if(str.substr(i, 3) == "one") {
              numStr.push('1');
      }
      if(str.substr(i, 3) == "two") {
              numStr.push('2');
      }
      if(str.substr(i, 5) == "three") {
              numStr.push('3');
      }
      if(str.substr(i, 4) == "four") {
              numStr.push('4');
      }
      if(str.substr(i, 4) == "five") {
              numStr.push('5');
      }
      if(str.substr(i, 3) == "six") {
              numStr.push('6');
      }
      if(str.substr(i, 5) == "seven") {
              numStr.push('7');
      }
      if(str.substr(i, 5) == "eight") {
              numStr.push('8');
      }
      if(str.substr(i, 4) == "nine") {
              numStr.push('9');
      }
      if(str[i] >= '0' && str[i] <= '9'){
        numStr.push(str[i]);
      }
      
    }
    
  //   console.log(numStr);
    return parseInt(
        numStr[0] + numStr[numStr.length - 1]
    )
    
  }
  
  
  // console.log(getDigits(strs[6]));
  // console.log(convStrToNum(strs[0]));
  
  function part2(strs) {
    let total = 0;
    for(let i = 0; i < strs.length; i++) {
      total += convStrToNum(strs[i]);
    }
    return total;
  }
  
  console.log(part2(strs));