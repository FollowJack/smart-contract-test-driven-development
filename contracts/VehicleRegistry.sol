pragma solidity ^0.4.18;

contract VehicleRegistry {

    string message = "Hello Vehicle Registry!";
    bytes32[] vehicles;

    function VehicleRegistry() public {
        vehicles = new bytes32[](10);
    }

    function getMessage() public view returns (string) {
        return message;
    }

    function getVehicles() public constant returns (bytes32[]) {
        return vehicles;
    }
}