// const isEven=function(num){
//   return num%2===0;
// }
// const tenIsEven= isEven(10);
// const elevenIsEven=isEven(11);
// console.log(tenIsEven);
// console.log(elevenIsEven);

// const ageCalculator = function (name, yearOfBirth, currentYear) {
//   if ((currentYear!==yearOfBirth) && ( currentYear !==0  && yearOfBirth !==0))
//   {
//     const age = currentYear - yearOfBirth;
//     return (name +" is "+ age +"years old.");
//   }
// }
// ageCalculator("Suzie",1983 ,2015);

// let x = 0;
// let y = 0;
// const newArray = [];
// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] ;
// const finalPosition = function(moves)
// {
//   for (let i=0; i < moves.length; i++)
//   {
//     if (moves[i] === 'north')
//     {
//       x = x + 1;
//     }
//     else if (moves[i] === 'south')
//     {
//       x = x-1;
//     }
//     else if (moves[i] === 'east')
//     {
//       y = y+1;
//     }
//     else if (moves[i] === 'west')
//     {
//       y = y-1;
//     }
//   }
//   newArray.push(y);
//   newArray.push(x);
//   return newArray;
// }
const calculateRectangleArea = function (length, width) {
  if (length >= 0 && width >= 0) {
    return length * width;
  }
  else {
    return undefined;
  }
}
const calculateTriangleArea = function (base, height) {
  if (base >= 0 && height >= 0) {
    return (base * height) / 2;
  }
  else {
    return undefined;
  }
}

const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    return Math.PI * Math.pow(radius, 2);
  }
  else {
    return undefined;
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

