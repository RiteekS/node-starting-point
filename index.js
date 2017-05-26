// var Calculator = require('./src/calculator');

// (() => {
//   var operation = process.argv[3];
//   var operand1 = Number(process.argv[2]);
//   var operand2 = Number(process.argv[4]);
//   // [,,operand1,operation,operand2] = process.argv
//   switch(operation){
//     case '+':
//     // console.log(Calculator.sum(+operand1, +operand2));
//     console.log(Calculator.sum(operand1, operand2));
//     break;
//     default:
//     console.log('Invalid operation!');
//   }
// })();
'use strict';

const Hapi = require('hapi');
var Calculator = require('./src/calculator');
const pool = require('./lib/db');

const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

// server.route({
//   method: 'GET',
//   path: '/',
//   handler: function (request, reply) {
//   reply('Hello, world!');
//   }
// });

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.file('./index.html');
    }
  });
});

pool.query('SELECT $1::int AS number', ['2'], function(err, res) {
  if(err) {
    return console.error('error running query', err);
  }
 
  console.log('number:', res.rows[0].number);
});

server.route({
  method: 'GET',
  path: '/calculator/',
  handler: function (request, reply) {
      // var num1 = num.spilt('/');
  var op = request.query.operation; 
  var num1 = Number(request.query.num1);
  var num2 = Number(request.query.num2);
  if(op=='sum')
    reply({ans: Calculator.sum(num1, num2)}).code(200);
  // else if(op=='subtract')
  //   reply({ans: Calculator.sbtract(num1, num2)}).code(200);
  }
});


server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
  reply('Hello, ' + request.params.name+ '!');
  }
});

server.start((err) => {
  if (err) {
      throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});