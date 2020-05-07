'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
  // Here we're going to include our functions that will handle each request in the routes.js file.
  create: (request, reply) => {
  Models.Note
    .create({
      date: new Date(),
      title: request.payload.noteTitle,
      slug: Slugify(request.payload.noteTitle, {lower: true}),
      description: request.payload.noteDescription,
      content: request.payload.noteContent
    })
    .then((result) => {
      // We're going to generate a view later, but for now lets just return the result.
      reply(result);
    });
},
};
