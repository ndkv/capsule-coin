var ConvertLib = artifacts.require("./ConvertLib.sol");
var CapsuleCoin = artifacts.require("./CapsuleCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, CapsuleCoin);
  deployer.deploy(CapsuleCoin);
};
