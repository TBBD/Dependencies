pragma solidity ^0.4.11;

import "./Add.sol";

contract Subtract is Add {
  function Subtract() {
    // constructor
  }
  function subtract(uint256 var1) {

    total = total - var1;

  }
}
