"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "IconPicker",
    plugin: "icon-picker",
    type: "text",
  });
};
