<img src="https://single-spa.js.org/img/logo-white-bgblue.svg" width="50" height="50">

[![npm version](https://img.shields.io/npm/v/single-spa-login-example-with-npm-packages.svg?style=flat-square)](https://www.npmjs.org/package/single-spa-login-example-with-npm-packages)

# single-spa-login-example-with-npm-packages

Single-spa application example which imports registered applications from NPM packages and manages authentication features as login.

## ✍🏻 Motivation

This application is a little [demo](https://single-spa-with-npm-packages.herokuapp.com/) of how you can use single-spa splitting code with [Option 2: NPM packages](https://single-spa.js.org/docs/separating-applications#option-2-npm-packages)

## ▶️ Demo

You can see a working demo of this application in the next link: [https://single-spa-with-npm-packages.herokuapp.com](https://single-spa-with-npm-packages.herokuapp.com/).

The login validation is harcoded in code and the credentials are:

| User          | Password      |     
| ------------- |:-------------:|
| admin         | 12345         |

## 💻 Run in localhost

If you prefer run this application in localhost you must follow next steps:

```
npm install
```

```
npm run serve
```

Finally you only have to open [http://localhost:8080](http://localhost:8080) in a browser to see the app running


## single-spa applications

This application is a root-application that inits a single-spa application that integrates several registered applications:

- [single-spa-auth-app](https://github.com/jualoppaz/single-spa-auth-app)
- [single-spa-layout-app](https://github.com/jualoppaz/single-spa-layout-app)
- [single-spa-home-app](https://github.com/jualoppaz/single-spa-home-app)
- [single-spa-angular-app](https://github.com/jualoppaz/single-spa-angular-app)
- [single-spa-vue-app](https://github.com/jualoppaz/single-spa-vue-app)
- [single-spa-react-app](https://github.com/jualoppaz/single-spa-react-app)

### <img src="https://vuejs.org/images/logo.png" width="25" height="25"> single-spa-auth-app

This application is displayed by default as there is no logged in user. A login form is printed and the credentials can be set for perform the login and access to the private views.

### <img src="https://vuejs.org/images/logo.png" width="25" height="25"> single-spa-layout-app

This application contains **header**, **navbar** and **footer** sections, **navigation** between registered applications and **/login** redirection if **logout** link is clicked or **token** is removed from **sessionStorage**.

### <img src="https://angularjs.org/img/ng-logo.png" width="25" height="25"> single-spa-home-app

This application is developed with **Angular JS** and is mounted when home icon in navbar is clicked. In that case the url will be **/** and all **Angular JS** routes will be managed by **angular-ui-router**. By the moment this application has only one default routed view.

### <img src="https://angular.io/assets/images/logos/angular/angular.png" width="25" height="25"> single-spa-angular-app

This application is developed with **Angular v8** and is mounted when **Angular** navbar item is clicked. In that case the url will be **/angular** and all **Angular** routes will be managed by **angular router**.

### <img src="https://vuejs.org/images/logo.png" width="25" height="25"> single-spa-vue-app

This application is developed with **Vue** and is mounted when **Vue** navbar item is clicked. In that case the url will be **/vue** and all **Vue** routes will be managed by **vue-router**.

### <img src="https://cdn.auth0.com/blog/react-js/react.png" width="25" height="25"> single-spa-react-app

This application is developed with **React** and is mounted when **React** navbar item is clicked. In that case the url will be **/react** and all **React** routes will be managed by **react-router-dom**.

## How it works ❓

There are several files for the right working of this application and they are:

- package.json
- root-application.js
- server.js
- webpack.config.js

### package.json

```json
{
  "name": "single-spa-login-example-with-npm-packages",
  "version": "0.2.5",
  "description": "Single-spa application example which imports registered applications from NPM packages and manages authentication features as login.",
  "main": "root-application.js",
  "scripts": {
    "serve": "webpack-dev-server",
    "start": "node server.js",
    "build": "webpack --config webpack.config.js -p",
    "heroku-postbuild": "npm run build",
    "lint": "eslint . --ext .js --fix",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jualoppaz/single-spa-login-example-with-npm-packages.git"
  },
  "author": "Juan Manuel López Pazos",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/jualoppaz/single-spa-login-example-with-npm-packages/issues"
  },
  "homepage": "https://github.com/jualoppaz/single-spa-login-example-with-npm-packages#readme",
  "devDependencies": {
    "@babel/core": "7.8.3",
    "babel-eslint": "10.0.3",
    "babel-loader": "8.0.6",
    "clean-webpack-plugin": "3.0.0",
    "copy-webpack-plugin": "5.1.1",
    "css-loader": "3.4.2",
    "eslint": "6.8.0",
    "eslint-config-airbnb-base": "14.0.0",
    "eslint-loader": "3.0.3",
    "eslint-plugin-import": "2.20.1",
    "html-webpack-plugin": "3.2.0",
    "webpack": "4.41.5",
    "webpack-cli": "3.3.10",
    "webpack-dev-server": "3.11.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "1.2.27",
    "@fortawesome/free-brands-svg-icons": "5.12.1",
    "@fortawesome/free-solid-svg-icons": "5.12.0",
    "@fortawesome/vue-fontawesome": "0.1.9",
    "bootstrap": "4.4.1",
    "bootstrap-vue": "2.2.2",
    "single-spa": "4.4.2",
    "single-spa-angular-app": "0.1.5",
    "single-spa-auth-app": "0.2.0",
    "single-spa-home-app": "0.1.4",
    "single-spa-layout-app": "0.2.5",
    "single-spa-react-app": "0.1.4",
    "single-spa-vue": "1.7.0",
    "single-spa-vue-app": "0.1.9",
    "vue": "2.6.11",
    "vue-router": "3.1.4",
    "vue-toastr": "2.1.2",
    "zone.js": "0.10.2"
  }
}
```

There are several scripts in this project:

- **serve**: for compile and serve the application in a **development** environment
- **start**: for run the compiled **dist** folder in a **production** environment, in this case **Heroku**
- **build**: for compile the application and build it as a **libray** in **umd** format
- **heroku-postbuild**: for compile the application in Heroku inside its custom lifecycle
- **lint**: for run **eslint** in all project

In **dependencies** config there are several libraries like bootstrap or fontawesome configured as **webpack externals** in dependencies like **single-spa-auth-app** or **single-spa-vue-app**.

### root-application.js

```javascript
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import * as singleSpa from 'single-spa';
import 'zone.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

singleSpa.registerApplication(
  'login',
  () => import('single-spa-auth-app'),
  showWhenAnyOf(['/login']),
);

singleSpa.registerApplication(
  'layout',
  () => import('single-spa-layout-app'),
  showExcept(['/login']),
);

singleSpa.registerApplication(
  'home',
  () => import('single-spa-home-app'),
  showWhenAnyOf(['/']),
);

singleSpa.registerApplication(
  'angular',
  () => import('single-spa-angular-app'),
  showWhenPrefix(['/angular']),
);

singleSpa.registerApplication(
  'vue',
  () => import('single-spa-vue-app'),
  showWhenPrefix(['/vue']),
);

singleSpa.registerApplication(
  'react',
  () => import('single-spa-react-app'),
  showWhenPrefix(['/react']),
);

singleSpa.start();
```

The **eslint** comments are indicated due to **webpack external** dependencies. Without the **eslint** comments the build process will fail.\
In order to avoid duplicated css imports, **bootstrap** import is performed in **root-application** instead of every **registered apps**.
All registered apps are declared here. **Login** and **Home** apps must be mounted when url **matchs** to given path, **Layout** app **always** but login path and **others** must be mounted when url **starts with** its own prefixes.
Finally **single-spa** is started for run its lifecycle.

### server.js

```javascript
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.resolve(__dirname, 'dist')));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port:', port);
});
```

This **express** server is designed for start this application in **Heroku** and serve the generated **dist** folder and **index.html**.

### webpack.config.js

```javascript
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'root-application': 'root-application.js',
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          'node_modules/single-spa-layout-app/dist/img',
        ),
        to: path.resolve(__dirname, 'dist/img'),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: false,
    }),
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
};
```

It's very important to config **root-application.js** as entrypoint. Then are defined all rule parsers for compile all file types. And finally there are several plugins for clean **dist** folder and process **index.html** with **webpack**.
