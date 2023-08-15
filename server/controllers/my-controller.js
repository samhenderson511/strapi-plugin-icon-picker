'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-icon-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
