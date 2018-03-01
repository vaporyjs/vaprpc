"use strict";

var onNewBlock = require("../block-management/on-new-block");
var eth_getBlockByNumber = require("../wrappers/eth").getBlockByNumber;

/**
 * Ensures that we have the latest block.
 */
function ensureLatestBlock(callback) {
  return function (dispatch) {
    dispatch(eth_getBlockByNumber(["latest", false], function (err, block) {
      if (err) return callback(err);
      if (block != null) {
        dispatch(onNewBlock(block));
        callback(null, block);
      }
    }));
  };
}

module.exports = ensureLatestBlock;
