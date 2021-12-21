// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract FirstContract {

  function isContract() public view returns (bool) {
    uint size;
    address addr = msg.sender;
    assembly { size := extcodesize(addr) }
    require(size == 0, "only allow contract address");
    return true;
  } 
  
}
