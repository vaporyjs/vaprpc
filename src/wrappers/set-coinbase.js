"use strict";

var speedomatic = require("@volut/speedomatic");
var vap_coinbase = require("./vap").coinbase;

function setCoinbase(callback) {
  return function (dispatch) {
    dispatch(vap_coinbase(null, function (err, coinbase) {
      if (err) return callback(err);
      if (coinbase != null) {
        dispatch({ type: "SET_COINBASE", address: speedomatic.formatVaporyAddress(coinbase) });
      }
      callback(null);
    }));
  };
}

module.exports = setCoinbase;
