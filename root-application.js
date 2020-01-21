import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "login",
  () => import("single-spa-auth-app"),
  showWhenAnyOf(["/login"])
);
singleSpa.registerApplication(
  "layout",
  () => import("single-spa-layout-app"),
  showExcept(["/login"])
);

singleSpa.start();

function showWhenAnyOf(routes) {
  return function(location) {
    return routes.some(route => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function(location) {
    return routes.some(route => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function(location) {
    return routes.every(route => location.pathname !== route);
  };
}
