var Migrations = artifacts.require("./Migrations.sol");
var VehicleRegistry = artifacts.require("./VehicleRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(VehicleRegistry);
};
