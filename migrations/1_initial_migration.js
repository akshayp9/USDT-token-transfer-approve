const UsdtSafeTransfer = artifacts.require("UsdtSafeTransfer");

module.exports = function (deployer) {
  deployer.deploy(UsdtSafeTransfer);
};
