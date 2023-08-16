# Icon picker custom field

![Icon picker custom field preview. Features a grid of icons.](https://github.com/JonssonWorkwear/strapi-plugin-icon-picker/assets/22895284/11e22408-3c27-4f05-a674-2b690342313a)


This package provides a custom field for Strapi that lets us select an icon. It uses the `IconPicker` component inside Strapi and a collection of generated SVG icons. 

## ✨ Features

* **List icons:** to see them all. 
* **Search icons:** to see just a few.

## 🔧 Installation

Clone this repository in the Strapi directory.

```
git clone https://github.com/JonssonWorkwear/strapi-plugin-icon-picker.git src/plugins/strapi-plugin-icon-picker
```

Add the plugin to the git submodules, inside `.gitmodules` file, so we can fetch its content after cloning.

```
[submodule "src/plugins/strapi-plugin-icon-picker"] 
  path = src/plugins/strapi-plugin-icon-picker
  url = https://github.com/JonssonWorkwear/strapi-plugin-icon-picker.git
```

Add the plugin to the yarn workspace, inside `./package.json` file, so we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-icon-picker"]
```

Install dependencies.

```
yarn
```

Register the plugin so Strapi can use it. Inside `./config/plugins.js` file add an entry to it.

```
module.exports = ({ env }) => ({
  "icon-picker": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-icon-picker"
  },
});
```

Rebuild the project and start the server.

```
yarn build
yarn develop
```

## 🪛 Development

In order to edit this plugin, make changes inside the plugin directory `./src/plugins/strapi-plugin-icon-picker`.

Rebuild the project and start the server.

```
yarn build
yarn develop
```

Or perhaps use the `--watch-admin` flag to toggle hot reloading of the admin panel.

```
yarn develop --watch-admin
```

All the changes are commited and pushed to _this_ repository, independently from the Strapi directory. If you are cloning again (or deploying) the Strapi project cotaining this plugin, make sure to fetch the content of the submodules.

```
git submodule update --init --recursive
```

## 📝 Usage

The plugin is made to be used instead of Strapi's default **Rich text field**. 

When adding a new field to a content type, select **CUSTOM** (instead of **DEAFULT**), then select **Icon picker**.

![Icon picker custom field preview inside the content type builder](https://github.com/JonssonWorkwear/strapi-plugin-icon-picker/assets/22895284/3e97f7f7-8bf8-4499-922d-281ff311fdff)
