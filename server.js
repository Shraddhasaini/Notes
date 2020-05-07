'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

//const server = new Hapi.Server();
//const server = server.connection({ port: Settings.port });

const server = Hapi.server({
port:3000 || process.env.port
})

server.route({
  method: 'GET',
  path: '/helloworld',
  handler: function (request, h) {
  const response = h.response('hello world');
  response.type('text/plain');
  return response;
}
});

server.start((err) => {
  Hoek.assert(!err, err);

  console.log(`Server running at: ${server.info.uri}`);
});
