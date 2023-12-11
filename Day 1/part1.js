let strs = ["", "abc", "1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]

function getNumStr(str) {
  let num1 = -1;
  let num2 = -1;
  
	for(let i = 0; i < str.length; i++) {
		// if character is a number
    if (!isNaN(str[i])) {
    	// if num 1 is -1, set it
      if(num1 == -1)
        num1 = str[i]
      // else (num1 is already set), set num 2
      else
        num2 = str[i]
    }  
  }
  
//   console.log(num1);
//   console.log(num2);
  
  if (num1 == -1)
    return 0;
  
  if(num2 == -1)
  return num1 + num1;
  
  // num 1 and num 2 both > 0
  return num1 + num2;
}

function aoc1(strs) {
  let total = 0;
  for (let i = 0; i < strs.length; i++)
  	total += Number.parseInt(getNumStr(strs[i]));
  
  return total;
  
}

console.log(aoc1(strs));