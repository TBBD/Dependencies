var Subtract = artifacts.require("./Subtract.sol");
var Add = artifacts.require("./Add.sol");

module.exports = function(deployer) {
  deployer.deploy(Add);
  deployer.deploy(Subtract);
};
