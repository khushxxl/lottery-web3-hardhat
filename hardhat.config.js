require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.4.17',
  networks: {
    ropsten: {
      url:
        'https://eth-ropsten.alchemyapi.io/v2/84QznWTEamOBgmDEEUnqZhZ4SUhZQF73',
      accounts: [
        '5957a3cd3e4c8f220ed43435153eab787d35c1bb10263932d515241d5baa5ccd',
      ],
    },
  },
}
