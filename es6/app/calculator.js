const add = (x,y) => {
  return x + y;
}

const multiply = (x,y) => {
  return x * y;
}

export {add, multiply};
export default multiply;

//default is a variable to be exported
// but const creates another variable
// so you can't do export default const var

// or export default x,y,z
