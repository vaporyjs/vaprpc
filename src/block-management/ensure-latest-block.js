"use strict";

var onNewBlock = require("../block-management/on-new-block");
var vap_getBlockByNumber = require("../wrappers/vap").getBlockByNumber;
var RPCError = require("../errors/rpc-error");
var errors = require("../errors/codes");

/**
 * Ensures that we have the latest block.
 */
function ensureLatestBlock(callback) {
  return function (dispatch) {
    dispatch(vap_getBlockByNumber(["latest", false], function (err, block) {
      if (err) return callback(err);
      if (block == null) return callback(new RPCError(errors.BLOCK_NOT_FOUND));
      dispatch(onNewBlock(block));
      callback(null, block);
    }));
  };
}

module.exports = ensureLatestBlock;
