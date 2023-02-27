require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();


module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat:{},
    rinkeby:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/8DhdH-WJgxh3LpZgjZpsXQ750sra89AU',
      accounts: [`91eca0232837109fca6e645285e7f4c936417ad42b477f1d2e43383696290d04`]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};