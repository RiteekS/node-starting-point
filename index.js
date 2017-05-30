'use strict';

const Path = require('path');
const Hapi = require('hapi');
var Calculator = require('./src/calculator');
const pool = require('./lib/db');
var corsHeaders = require('hapi-cors-headers');


const server = new Hapi.Server({
  connections: {
    routes: {
      files : {
        relativeTo: Path.join(__dirname, 'Public')
      } 
    }
  }
});


server.connection({ port: 3001, host: 'localhost' });

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route(
  [
      {
        method: 'GET',
        path: '/calculator',
        handler: function (request, reply) {
          var op = request.query.operation; 
          var num1 = Number(request.query.num1);
          var id = Number(request.query.id);
          //console.log(op + num + id);
          pool.query('SELECT val from entry where id=$1', [id], function(err, res){
            if(err)
            {
              return console.log('error running query', err);
            }
            var temp = res.rows[0].val;
            switch(op){
              case 'sum':
                var result = Calculator.sum(temp, num1);
                break;
              case 'subtract':
                var result = Calculator.sub(temp,num1);
                break;
              case 'multiply':
                var result = Calculator.mult(temp, num1);
                break;
              case 'divide':
                var result = Calculator.div(temp, num1);
                break;
            }
          
            console.log(result);
            pool.query('UPDATE entry set val = $1 where id = $2', [result, id], function (err,res){
              if(err)
              {
              return console.log('error running query', err);
              }
            });
            reply({"ans": result});          
           });
          }
      },
      {
        method: 'POST',
        path: '/create',
        handler: function (request, reply) {
          console.log('in create');
          pool.query('SELECT id from entry order by id desc limit 1','',function(err,res){
            if(err)
            {
              return console.log('error running query', err);
            }
             var temp = res.rows[0].id + 1;
             console.log(temp);
          

            pool.query('INSERT INTO entry(id, val) VALUES($1,$2)', [temp,0], function(err, res) {
              if(err) {
                return console.error('error running query', err);
              }
              //console.log('number:', res.rows[0].number);
              reply({
                      val: 0,
                      id: temp
              });
            });

          });
          
          }
      },
  ]);
});

server.ext('onPreResponse', corsHeaders);

server.start((err) => {
  if (err) {
      throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});




