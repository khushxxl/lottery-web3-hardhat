require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.4.17',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.BLOCKCHAIN_CODE],
    },
  },
}
