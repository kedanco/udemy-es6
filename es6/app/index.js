// let keyword & variable scope
  let a = 'hello';

  console.log(a);
// scope can be used to make the variable private from public access
  {
    let salary = 90000;
  }
    console.log(salary);


// const keyword
  const g = 2;
// push works!
  const array = [1,2,3];
  array.push(4);
  console.log(array);

// this won't work!
  array = [7,8,9];

// Template literals (using backticks)
  var a = 'hello';
  var b = 'world';
  console.log(`hello ${b}`);


//Spread operator - Unlimited amount of arguments!
  console.log(a);
  function print(...z){
    console.log(a,b,c);
  }
  print(1,2,3,4,5,6);

// Destructuring Assignment - Array
  let c = [100,200,300,400];
  let [a, ...b] = c;
  console.log(a,b);

  let fellowship = ["Frodo", "Gandalf", "Aragon"];
  let [hobbit, wizard, ranger] = fellowship;
  console.log(hobbit, wizard, ranger);


// Destructuring Assignment - Objects
// matches variable name w/ property
// let wizard = {magical: true, power: 10};
// let {magical, power} = wizard;

  let magical = true;
  let power = 2;

  let ranger = {magical: false, power: 9};
// parenthesis makes sure reassignment through destructuring is possible

  ({magical, power} = ranger);
  console.log(magical, power);

// Arrow functions are anonymous
// No names identifier

  // function blastoff(){
  //   console.log("3..2..1.. blast off!");
  // }

  // setTimeout(() => {
  //   console.log("3..2..1.. blast off!");
  // },1000);

  const blastoff = () => {
    console.log("3..2..1.. blast off!"); 
  }

  blastoff();

// Arrow functions do not bind their own `this`

  this.a = 25;

  let print = function(){
    this.a = 50; //Different this.a from global
    console.log('this.a', this.a);
  }  

  let arrowPrint = () => {
    // arrow's this will follow the global scope's this.
    console.log('this.a in arrowPrint', this.a);
  }

  print();

// The map function

  let points = [10,20,30];

  // let addOne = function(element){
  //   return element + 1;
  // }

  points = points.map(element => element + 1);
  // when no braces, the function auto returns, thus no need return statement

  console.log(points);

// Filter

  // let isPassing = (grade) => {
  //   return grade >= 70;
  // }

  let scores = [90,85,67,71,84,60,39,52];

  let passing = scores.filter(element => element >= 70);

  console.log(passing);

// Other helper methods include
// -find
// -forEach
// -reduce, some, keys, values


// importing from other files
import {students, total} from './students';
console.log(students, total);

import multiply from './calculator';
console.log(multiple(3,5));
