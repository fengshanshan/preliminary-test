const Migrations = artifacts.require("Migrations");
const Hello = artifacts.require("Hello");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Hello);
};
