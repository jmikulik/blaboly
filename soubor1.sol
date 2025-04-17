// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ColdFusion is ERC1155 {
    constructor() ERC1155("https://example.com/api/item/{id}.json") {
        _mint(msg.sender, 1, 20000, ""); // Mint 20,000 units of Cold Fusion NFT
    }
}