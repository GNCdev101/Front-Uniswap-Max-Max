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
				address: "0xF4fA1c9228cEAd5b9cA71b14eBbC27Fef9FA4816",
				token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
				apy: "12",
				dec: "18",
				tvl: "1000",
			},
			{
				name: "USDC",
				address: "0xAe445C1365a5f7A99A910c29D098514566273825",
				token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
				apy: "10",
				dec: "6",
				tvl: "104547451",
			},
			{
				name: "WBTC",
				address: "0x98A4C7323b01010d97F17fa4cdF326a3Ce560f2e",
				token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
				apy: "6",
				dec: "8",
				tvl: "120",
			},
		],
		pool: {
			WETH: {
				address: "0xF4fA1c9228cEAd5b9cA71b14eBbC27Fef9FA4816",
				token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
				apy: "12",
				dec: "18",
				tvl: "1000",
			},
			USDC: {
				address: "0xAe445C1365a5f7A99A910c29D098514566273825",
				token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
				apy: "10",
				dec: "6",
				tvl: "104547451",
			},
			WBTC: {
				address: "0x98A4C7323b01010d97F17fa4cdF326a3Ce560f2e",
				token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
				apy: "6",
				dec: "8",
				tvl: "120",
			},
		},
	},
};

module.exports = {
	networkConfig,
	uiConfig,
};

//25815 500
//25720 400
//25439 250
//25262 200
//25262 170
//25244 160
//25235 155
//25179 151
//25179 150
//25750 148
//25750 140
//25722 130
//25566 100
