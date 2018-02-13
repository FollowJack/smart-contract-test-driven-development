// Specifically request an abstraction for VehicleRegister
var VehicleRegister = artifacts.require("VehicleRegistry.sol");

contract('VehicleRegister', function (accounts) {
    it('Test: (TODO: remove it later) should return a correct string', function (done) {
        var vehicleRegister = VehicleRegister.deployed();
        vehicleRegister.then(function (contract) {
            return contract.getMessage.call(); // **IMPORTANT
        }).then(function (result) {
            assert.isTrue(result === 'Hello Vehicle Registry!');
            done();
        })
    });

    //TODO get array of vehicles
    it('should contain an array of vehicles', function (done) {
        var vehicleRegister = VehicleRegister.deployed();
        vehicleRegister.then(function (contract) {
            return contract.getVehicles.call(); // **IMPORTANT
        }).then(function (result) {
            assert.isTrue(Array.isArray(result));
            done();
        })
    });

    //TODO write test for adding a vehicle

    //TODO write test for removing a vehicle

    //TODO write test for adding a vehicle




});