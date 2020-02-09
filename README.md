<img src="https://single-spa.js.org/img/logo-white-bgblue.svg" width="50" height="50">

[![npm version](https://img.shields.io/npm/v/single-spa-login-example-with-npm-packages.svg?style=flat-square)](https://www.npmjs.org/package/single-spa-login-example-with-npm-packages)
[![](https://data.jsdelivr.com/v1/package/npm/single-spa-login-example-with-npm-packages/badge)](https://www.jsdelivr.com/package/npm/single-spa-login-example-with-npm-packages)

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
