const uiConfig = {
	TVL: 2.6,
	TVT: 1.3,
};

const networkConfig = {
	1: {
		name: "mainnet",
		addressMarket: "0x021DBfF4A864Aa25c51F0ad2Cd73266Fde66199d",
		pools: [
			{
				name: "WETH",
				address: "0x021DBfF4A864Aa25c51F0ad2Cd73266Fde66199d",
				apy: "12",
				tvl: "1000",
			},
			{
				name: "DAI",
				address: "0x021DBfF4A864Aa25c51F0ad2Cd73266Fde66199d",
				apy: "10",
				tvl: "104547451",
			},
			{
				name: "WBTC",
				address: "0x021DBfF4A864Aa25c51F0ad2Cd73266Fde66199d",
				apy: "6",
				tvl: "120",
			},
		],
	},

	// 11155111: {
	//   name: "sepolia",
	//   addressMarket: "",
	//   addressPools: [],
	// },

	// 42161: {
	//   name: "arbitrum one",
	//   addressMarket: "",
	//   addressPools: [],
	// },
};

module.exports = {
	networkConfig,
	uiConfig,
};
