"use strict";

var speedomatic = require("@volut/speedomatic");
var clone = require("clone");
var vap = require("../wrappers/vap");

function resendTransaction(transaction, gasPrice, gasLimit, callback) {
  return function (dispatch) {
    var newTransaction = clone(transaction);
    if (gasPrice) newTransaction.gasPrice = speedomatic.hex(gasPrice);
    if (gasLimit) newTransaction.gasLimit = speedomatic.hex(gasLimit);
    return dispatch(vap.sendTransaction(newTransaction, callback));
  };
}

module.exports = resendTransaction;
