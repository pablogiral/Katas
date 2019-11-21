const squareDigits = (num) => +num.toString().split("").map(num => Math.pow(num, 2)).join().replace(/,/g,"")

squareDigits(9119) //811181