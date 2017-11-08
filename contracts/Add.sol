pragma solidity ^0.4.11;

contract Add {

  uint256 public total;

  function Add() {
    // constructor
  }

  function addNumbers(uint256 var1, uint256 var2) {
    total = var1 + var2;
  }

}
