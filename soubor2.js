// Skript pro ověření kontraktu na Moonbeam pomocí Hardhat
// 1. Nainstaluj Hardhat: npm install --save-dev hardhat
// 2. Nastav Hardhat config

// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0",
  networks: {
    moonbeam: {
      url: "https://rpc.api.moonbeam.network",
      chainId: 1284,
      accounts: ["TVŮJ_PRIVÁTNÍ_KLÍČ"], // Nikdy ho sem neveřejňuj!
    },
  },
  etherscan: {
    apiKey: "TVŮJ_MOONSCAN_API_KLÍČ", // Získej na moonbeam.moonscan.io
    customChains: [
      {
        network: "moonbeam",
        chainId: 1284,
        urls: {
          apiURL: "https://api-moonbeam.moonscan.io/api",
          browserURL: "https://moonbeam.moonscan.io",
        },
      },
    ],
  },
};

// 3. Ověř kontrakt (po nasazení):
// npx hardhat verify --network moonbeam NASAZENÁ_ADRESA_KONTRAKTU