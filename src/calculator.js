function sum(a, b) {
  return a+b;
}

function div(a, b) {
  if(b===0)
  	return "Not possible";
  return a/b;
}
module.exports = {
  sum: sum, 
  div: div
}


// exports.sum = function (a, b) {
//   return a + b;
// }
// exports.sum = (a, b) => a + b;
