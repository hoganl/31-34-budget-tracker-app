# 31-34 Budget Tracker App
**Author**: Lacy Hogan
**Version**: 1.0.2

## Overview
This application allows a user to add, update, and remove a category to their budget. A user can add, update, remove an expense and price to a category.

## Getting Started
The following devDependencies need to be installed:
- "babel-core": "^6.26.3",
  "babel-eslint": "^8.2.3",
  "babel-loader": "^7.1.4",
  "babel-plugin-transform-react-jsx-source": "^6.22.0",
  "babel-preset-env": "^1.7.0",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-0": "^6.24.1",
  "css-loader": "^0.28.11",
  "dotenv": "^5.0.1",
  "enzyme": "^3.3.0",
  "enzyme-adapter-react-16": "^1.1.1",
  "eslint": "^4.19.1",
  "eslint-config-airbnb-base": "^12.1.0",
  "eslint-plugin-import": "^2.12.0",
  "eslint-plugin-jest": "^21.15.1",
  "eslint-plugin-react": "^7.8.2",
  "file-loader": "^1.1.11",
  "html-webpack-plugin": "^3.2.0",
  "jest": "^22.4.4",
  "mini-css-extract-plugin": "^0.4.0",
  "node-sass": "^4.9.0",
  "prop-types": "^15.6.1",
  "react": "^16.3.2",
  "react-dom": "^16.3.2",
  "react-redux": "^5.0.7",
  "react-router-dom": "^4.2.2",
  "react-test-renderer": "^16.4.0",
  "redux": "^4.0.0",
  "redux-devtools-extension": "^2.13.2",
  "redux-mock-store": "^1.5.1",
  "sass-loader": "^7.0.1",
  "style-loader": "^0.21.0",
  "webpack": "^4.8.3",
  "webpack-cli": "^2.1.3",
  "webpack-dev-server": "^3.1.4",
  "webpack-merge": "^4.1.2",
  "uuid": "^3.2.1"

package.json scripts must include:
- "test": "jest --coverage",
  "watch": "webpack-dev-server --config webpack.dev.js",
  "build": "webpack --config webpack.dev.js"

To start the server, enter npm run watch in your terminal

To run the tests, enter npm run test in your terminal

## Architecture
This application uses JavaScript and React library and sass library

## Change Log
05-29-2018 5:00pm - Application now has a fully-functional category create, delete, and update.
05-30-2018 3:45pm - Application now has a fully-functional expense create, delete, and update.
6-1-2018 8:30pm - Application added redux-reporter and redux-session middleware and added tests.

## Credits and Collaborations
