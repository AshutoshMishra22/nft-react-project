//https://eth-ropsten.alchemyapi.io/v2/vVxERaGSluL2VlyZ4CEF0wrBEOuZrtUG
//0x4abBD3aa3BDB256988D3C4De27a49889F051052e
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/vVxERaGSluL2VlyZ4CEF0wrBEOuZrtUG",
      accounts: [
        "cd4f9694a7e923eba342fe78404c50fd996ae63d5aa74fabf8b213e1627506b4",
      ],
    },
  },
};
