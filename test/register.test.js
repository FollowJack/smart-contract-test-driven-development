// Specifically request an abstraction for VehicleRegister
var VehicleRegister = artifacts.require("VehicleRegistry.sol");

contract('VehicleRegister', function(accounts) {
    it('should return a correct string', function(done) {
        var vehicleRegister = VehicleRegister.deployed();
        vehicleRegister.then(function(contract){
            return contract.GetMessage.call(); // **IMPORTANT
        }).then(function(result){
            assert.isTrue(result === 'Hello Vehicle Registry!');
            done();
        })
    });
});