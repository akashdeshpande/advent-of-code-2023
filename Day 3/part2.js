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
  
  function isDigit(char) {
    if(char >= '0' && char <= '9')
      return true;
    return false;
  }
  
  function findFullNum(mat, i, j) {
    let leftPtr = j;
    let rightPtr = j;
    let tJ = j;
    
    while (isDigit(mat[i][tJ-1])) {
      leftPtr = tJ-1;
      tJ--;
    }
    tJ = j;
    while (isDigit(mat[i][tJ+1])) {
      rightPtr = tJ+1;
      tJ++;
    }
    
  //   console.log(leftPtr, rightPtr);
    
  //   console.log(mat[i].substring(leftPtr, rightPtr+1));
    return Number.parseInt(mat[i].substring(leftPtr, rightPtr+1));
    
  }
  
  function findNum(mat, i, j) {
    let gears = [];
    let num = 0;
    if(isDigit(mat[i-1][j-1])){
      num = findFullNum(mat, i-1, j-1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("tl")
      }
    }
    if(isDigit(mat[i-1][j])){
      num = findFullNum(mat, i-1, j);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("tc")
      }
    }
    if(isDigit(mat[i-1][j+1])){
      num = findFullNum(mat, i-1, j+1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("tr")
      }
    }
    if(isDigit(mat[i][j-1])){
      num = findFullNum(mat, i, j-1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("cl")
      }
    }
    if(isDigit(mat[i][j+1])){
      num = findFullNum(mat, i, j+1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("cr")
      }
    }
    if(isDigit(mat[i+1][j-1])){
      num = findFullNum(mat, i+1, j-1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("bl")
      }
    }
    if(isDigit(mat[i+1][j])){
      num = findFullNum(mat, i+1, j);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("bc")
      }
    }
    if(isDigit(mat[i+1][j+1])){
      num = findFullNum(mat, i+1, j+1);
      if(!gears.includes(num)){
        gears.push(num)
  //       console.log("br")
      }
    }
    
    if(gears.length > 0)
        console.log(gears);
    
    let product = 1;
    if(gears.length == 2) {
      gears.forEach( x => {
        product = product * x;
      })
    }
    
    console.log(product);
    return product;
    
  }
  
  function pt2(mat) {
    let numAroundStar = [];
    let gearRatioSum = 0;
    for(let i = 0; i < mat.length; i++) {
      for(let j = 0; j < mat[i].length; j++) {
        if(mat[i][j] == '*') {
          numAroundStar = findNum(mat, i, j);
          if(numAroundStar > 1)
              gearRatioSum += numAroundStar;
        }
        
        
  //         console.log(`${i} ${j}`);
      }
    }
    console.log(gearRatioSum);
  }
  
  console.log(pt2(mat)); // final ans 81296995
  // console.log(findFullNum(mat, 7, 7))
  // console.log(isDigit('.')) 