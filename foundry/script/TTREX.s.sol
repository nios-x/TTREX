// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TTREX} from "../src/TTREX.sol";

contract NFTscript is Script {
    TTREX public counter;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        counter = new TTREX("ipfs://bafkreifzqmwumgea3iuzsj3vokxuqla6pf5a5onxryiierijcyvvfd5piy");

        vm.stopBroadcast();
    }
}
