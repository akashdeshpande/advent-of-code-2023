let mat = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598.."
  ];
  
  function getNumberIndices(str) {
    
    let firstIndex = -1;
    let lastIndex = -1;
  
    let indexPairs = [];
  
    let numDetected = false;
  
    for (let i = 0; i < str.length; i++) {
      if (numDetected) {
        if(isNaN(str[i])) {
          lastIndex = i-1;
          indexPairs.push([firstIndex, lastIndex]);
          numDetected = false;
        } else { // str[i] is num
          if(i == str.length -1) {
            lastIndex = i;
            indexPairs.push([firstIndex, lastIndex]);
            numDetected = false;
          }
          continue;
        }
  
      } else { // num is not detected
  
        if(isNaN(str[i])) {
          continue;
        } else { // str[i] is num
          firstIndex = i;
          numDetected = true;
        }
      }
  
    }
      
    return indexPairs;
  }
  
  // takes in matrix
  // matIndex = the line on which number is found
  // numI = start position of number
  // numJ = end position of number
  function checkIfNumberIsValid(mat, matIndex, numI, numJ) {
    let number = mat[matIndex].substring(numI, numJ+1);
  //   console.log(mat[matIndex].substring(numI, numJ+1)); // substring end is exclusive, so add +1 to numJ
    // we have the number
    // todo: check if number has a sumbol near it
    // check if substring above it, substring below it
    // char on left and char on right
    // is a symbol
    
    let symbolRegex = /[^0-9.]+/g;
    let symbolFound = false;
    
    // string above
    if(mat[matIndex-1] != undefined) {
      let topStr = mat[matIndex - 1].substring(numI - 1, numJ + 2)
      if(symbolRegex.test(topStr))
          symbolFound = true;
    }
    
    // string below
    if(mat[matIndex + 1] != undefined) {
      let bottomStr = mat[matIndex + 1].substring(numI - 1, numJ + 2)
      if(symbolRegex.test(bottomStr))
        symbolFound = true;
    }
    
    // left char
    if(mat[matIndex][numI - 1] != undefined) {
      if(symbolRegex.test(mat[matIndex][numI - 1]))
        symbolFound = true;
    }
    
    // right char
    if(mat[matIndex][numJ + 1] != undefined) {
      if(symbolRegex.test(mat[matIndex][numJ + 1]))
        symbolFound = true;
    }
    
    // if any of them is a yes
    // number is valid
    // add to total
    if(symbolFound) {
  //     console.log(number);
      return number;
    }
    
    return 0;
    
  }
  
  function getSum(mat) {
    
    let total = 0;
    let indices = [];
    
    for (let i = 0; i < mat.length; i++) {
      // parse every string
          // get indices
      indices = getNumberIndices(mat[i]);
  //     console.log(indices);
      
      
          // get adjacent values
          // check if a symbol exists there
      if(indices.length > 0) { // if a number is found
        for(let j = 0; j < indices.length; j++) {
          total += Number.parseInt(checkIfNumberIsValid(mat, i, indices[j][0], indices[j][1]));
        }
      }
          // further processing (if symbol exists, add to total)
       
      
    }
    
  //   console.log(total);
    return total;
    
  }
  
  // console.log(getNumberIndices(str));
  
  console.log(getSum(mat));