"use strict";

var createVaprpc = require("./create-vaprpc");
var reducer = require("./reducers");
var composeReducers = require("./reducers/compose-reducers");
var version = require("./version");

var vaprpc = createVaprpc(reducer);
vaprpc.withCustomReducer = function (customReducer) {
  return createVaprpc(composeReducers(customReducer, reducer));
};

vaprpc.lib_version = version;
module.exports = vaprpc;
