# Aurelia UI Components

## Using components

You can easily include the components into your project by adding `aurelia-ui-components` as a plugin in your app's main.js file.

To only load the components you're using, pass an array of component names when registering the plugin. For example: `.plugin('aurelia-ui-components', ['menu', 'tooltip'])`

## Including the component styles

The preferred way is by using SASS. Simply import components.scss into your app and all the component styles will be merged into your stylesheet.

There is also a precompiled CSS file in the dist/ folder you can use.

## Running the example

* `cd example; npm install`
* `cd ..; npm run watch`