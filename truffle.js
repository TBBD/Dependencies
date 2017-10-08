module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4",
      from: "0xa29f3e0589d4af00740e8257093cb517d2d35ec3",
      gas:2000000
    }
  }
};
