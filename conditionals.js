// const temp=20;
// if(temp<0){
  
//   console.log("Make sure you pick out a scarf!");
// }
// else if(temp<15)
// {
//   console.log("Short sleeves won't cut it!");
// }else{
//   console.log("Short sleeves are fine.");
// }
// console.log("Now you're ready to go outside!");
const whichSchool  = function (age) {
  // Your code in here ...
  if (age < 13) 
  {
    console.log("Elementary School");
    return 'Elementary School';
  }
  else if (age >= 13 && age <= 18) 
  {
    console.log('Secondary School');
    return 'Secondary School';
  } else 
  {
    console.log("Lighthouse Labs");
    return "Lighthouse Labs";
  }
    
  
}