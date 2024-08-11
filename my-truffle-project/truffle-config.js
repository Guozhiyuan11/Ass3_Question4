/module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // 本地主机IP
      port: 7545,            // Ganache默认端口
      network_id: "*",       // 匹配任何网络ID
    },
  },

  compilers: {
    solc: {
      version: "0.5.1",      // 指定Solidity编译器的版本
      settings: {
        optimizer: {
          enabled: true,     // 启用优化
          runs: 200          // 优化运行次数
        },
      },
    },
  },
};

