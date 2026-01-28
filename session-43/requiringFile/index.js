// file 1
let pi = Math.PI;
console.log(pi);

// let ans = (num) => {return num*num}
let ans1 = (num) => num * num;
let ans2 = (a, b) => a + b;
console.log(ans1);
console.log(ans2);

// module.exports = {pi,ans1,ans2} //why not this be a key-value pair?

// //obj == key:value

// module.exports = {
//   pi: pi, // jab key value same ho to tab single value se kaam chal jata hai
//   ans11: ans1, // agar change karna hai to fir pure me hi change kara padega
//   ans2: ans2,
// };

module.exports = {
  pi: pi, // jab key value same ho to tab single value se kaam chal jata hai
  ans11: ans1, // agar change karna hai to fir pure me hi change kara padega
  ans2: ans2,
};


//kya object ki jagah par bi kuch bhej sakte hai? --> YES
module.exports = 'samarth vohra web mentor';