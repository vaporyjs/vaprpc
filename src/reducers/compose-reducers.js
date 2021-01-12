"use strict";

var assign = require("lodash.assign");

/**
 * @param {function} customReducer External (user-specified) reducer.
 * @param {function} reducer Default vaprpc reducer.
 */
function composeReducers(customReducer, reducer) {
  return function (state, action) {
    return assign({}, customReducer(state, action), { vaprpc: reducer(state.vaprpc, action) });
  };
}

module.exports = composeReducers;
