"use strict";

var vap_sign = require("../wrappers/vap").sign;

/**
 * Check to see if the provided account is unlocked for the connected node.
 */
function isUnlocked(account, callback) {
  return function (dispatch) {
    dispatch(vap_sign([account, "0x00000000000000000000000000000000000000000000000000000000000f69b5"], function (err) {
      if (err) {
        if (err.error !== -32000 || err.message !== "account is locked") return callback(err);
        return callback(null, false);
      }
      callback(null, true);
    }));
  };
}

module.exports = isUnlocked;
