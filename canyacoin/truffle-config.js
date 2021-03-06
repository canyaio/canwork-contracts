const HDWalletProvider = require("truffle-hdwallet-provider");

const gasPrice = 20000000000;

module.exports = {
  networks: {
    ganache: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      network_id: '*'
    },
    ropsten: {
      network_id: 3,
      gas: 2000000,
      gasPrice,
      provider: function () {
        return new HDWalletProvider(process.env.WALLET_MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_ADMIN_API_KEY}`)
      }
    },
    mainnet_infura: {
      network_id: 1,
      gasPrice,
      provider: function () {
        return new HDWalletProvider(process.env.WALLET_MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_ADMIN_API_KEY}`)
      }
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};