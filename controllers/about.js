'use strict';

const createView = (request, response) => {
  response.send('This is the About page.');
};

export default {
  createView
};