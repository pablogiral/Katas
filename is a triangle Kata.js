const triangle = (a,b,c) => {return (a + b) > c && (a + c) > b && (b + c) > a ? true : false}

triangle(2,1,1) //true