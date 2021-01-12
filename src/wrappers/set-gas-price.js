"use strict";

var vap_gasPrice = require("./vap").gasPrice;
var isHex = require("../utils/is-hex");

function setGasPrice(callback) {
  return function (dispatch) {
    dispatch(vap_gasPrice(null, function (err, gasPrice) {
      if (err) return callback(err);
      if (gasPrice != null && isHex(gasPrice)) {
        dispatch({ type: "SET_GAS_PRICE", gasPrice: parseInt(gasPrice, 16) });
      }
      callback(null);
    }));
  };
}

module.exports = setGasPrice;
