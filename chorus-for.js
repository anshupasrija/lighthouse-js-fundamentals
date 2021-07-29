// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");



for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  else if (i % 4 === 0) {
    console.log("Lighthouse");
  }
  else
  {
    console.log(i);
  }
}