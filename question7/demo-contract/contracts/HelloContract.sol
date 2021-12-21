// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {
  string public message;

  function setMessage(string memory initialMessage) public {
    message = initialMessage;
  }
}