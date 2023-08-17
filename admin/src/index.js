import React from "react";

import { PluginIcon } from "./components/PluginIcon";

export default {
  register(app) {
    app.customFields.register({
      name: "IconPicker",
      pluginId: "icon-picker",
      type: "text",
      icon: PluginIcon,
      intlLabel: {
        id: "icon-picker.label",
        defaultMessage: "Icon picker",
      },
      intlDescription: {
        id: "icon-picker.description",
        defaultMessage: "List of icons, then pick one",
      },
      components: {
        Input: async () => import("./components/IconPicker"),
      },
      options: {
        advanced: [
          {
            sectionTitle: {
              id: "icon-picker.settings",
              defaultMessage: "Settings",
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "icon-picker.required.label",
                  defaultMessage: "Required field",
                },
                description: {
                  id: "icon-picker.required.description",
                  defaultMessage:
                    "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
    });
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: data,
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
