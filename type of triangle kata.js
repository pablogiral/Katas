const typeOfTriangle = (a,b,c) => {
  return (a + b) > c && (a + c) > b && (b + c) > a ?
   a === b && a === c && b === c ? "Equilateral" : a === b && a !== c || b === c && b !== a || a === c && a !== b? "Isosceles": "Escalene" : "Not a valid triangle"
}

typeOfTriangle(2,2,2)