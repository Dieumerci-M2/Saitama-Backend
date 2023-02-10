const Contacts = artifacts.require('../contracts/Contacts.sol');

module.exports = function(deployer) {
  deployer.deploy(Contacts);
};