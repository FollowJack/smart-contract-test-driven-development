pragma solidity ^0.4.11;

contract VehicleRegistry {

    string message = "Hello Vehicle Registry!";

    function VehicleRegistry() {
        // constructor
    }

    function GetMessage() returns (string) {
        return message;
    }
}