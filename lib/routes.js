'use strict';

const Note = require('./controllers/note');
const Home = require("./controllers/home");

module.exports = [
  // We're going to define our routes here
];

{
  method: 'GET',
  path: '/',
  handler: Home,
  config: {
    description: 'Gets all the notes available'
  }
},

{
  method: 'POST',
  path: '/note',
  handler: (request, reply) => {
    reply('New note');
  },
  config: {
    description: 'Adds a new note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}',
  handler: (request, reply) => {
    reply('This is a note');
  },
  config: {
    description: 'Gets the content of a note'
  }
},
{
  method: 'PUT',
  path: '/note/{slug}',
  handler: (request, reply) => {
    reply('Edit a note');
  },
  config: {
    description: 'Updates the selected note'
  }
},
{
  method: 'GET',
  path: '/note/{slug}/delete',
  handler: (request, reply) => {
    reply('This note no longer exists');
  },
  config: {
    description: 'Deletes the selected note'
  }
},
