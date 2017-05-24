function sum(a, b) {
  return a+b;
}

function div(a, b) {
    if(b === 0){
    throw new Error("Denominator can't be zero")
  }
  return a / b;
}

function mult(a, b) {
    return a*b;
}

function sub(a, b) {
    return a-b;
}

function abs(a){
	return Math.abs(a);
}

function ceil(a){
	return Math.ceil(a);
}

function cos(a){
	return Math.cos(a);
}

function exp(a){
	return Math.exp(a);
}

function sqrt(a){
	if(a<0)
		throw new Error("Negative no. are not allowed")
	return Math.sqrt(a);
}

function log(a){
	if(a<0)
		throw new Error("-ve nos.not allowed")
	return Math.log(a);
}

function max(a,b){
	if(a>=b)
		return a;
	return b;
}

function cbrt(a){
  return Math.cbrt(a);
}

function cube(x){
  return x*x*x;
}

function sqr(x){
  return x*x;
}

module.exports = {
  sum: sum, 
  sub: sub,
  mult: mult,
  div: div,
  ceil: ceil,
  abs: abs,
  cos: cos,
  exp: exp,
  sqrt: sqrt,
  log: log,
  max: max,
  cbrt: cbrt,
  cube: cube,
  sqr: sqr
}

// exports.sum = function (a, b) {
//   return a + b;
// }
// exports.sum = (a, b) => a + b;
