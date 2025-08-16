const uiConfig = {
	TVL: 2.6,
	TVT: 1.3,
};

const networkConfig = {
	1: {
		name: "mainnet",
		addressMarket: "0x4CF4dd3f71B67a7622ac250f8b10d266Dc5aEbcE",
		addressPositions: "0x021DBfF4A864Aa25c51F0ad2Cd73266Fde66199d",
		pools: [
			{
				name: "WETH",
				address: "0xB305369CC06FD05898b1DCFb96Ae27D0c783a89e",
				token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
				apy: "12",
				dec: "18",
				tvl: "1000",
			},
			{
				name: "USDC",
				address: "0xE4FAEc0F9344dF83E71C4E0043e058304ACbcC09",
				token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
				apy: "10",
				dec: "6",
				tvl: "1045474",
			},
			{
				name: "WBTC",
				address: "0xF2feC1B0A1ec000132A9E92e9d70ad96E93691b4",
				token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
				apy: "6",
				dec: "8",
				tvl: "120",
			},
		],
		pool: {
			WETH: {
				address: "0xB305369CC06FD05898b1DCFb96Ae27D0c783a89e",
				token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
				apy: "12",
				dec: "18",
				tvl: "1000",
			},
			USDC: {
				address: "0xE4FAEc0F9344dF83E71C4E0043e058304ACbcC09",
				token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
				apy: "10",
				dec: "6",
				tvl: "1045474",
			},
			WBTC: {
				address: "0xF2feC1B0A1ec000132A9E92e9d70ad96E93691b4",
				token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
				apy: "6",
				dec: "8",
				tvl: "120",
			},
		},
	},
	137: { // Polygon network (chain ID 137)
		name: "polygon",
		addressMarket: "0xD0E57cc177994287F6B654CFC3CFA7E8d561412c", // Market contract address from deployment
		addressPositions: "0x6b297328593F410022683205674fe1487602B84A", // Positions contract address from deployment
		pools: [
		  {
			name: "WBTC",
			address: "0x2e2A0Deb39bAAe4C3E43EcA0A345e2f0625b7Cf2", // WBTC LiquidityPool address
			token: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", // WBTC token address on Polygon
			apy: "6", // Placeholder APY (replace with actual value)
			dec: "8", // WBTC decimals from deployment trace
			tvl: "120", // Placeholder TVL (replace with actual value)
		  },
		  {
			name: "WPOL",
			address: "0x02D84726680ABF105f6a0532FE6eB85e3289455A", // WPOL LiquidityPool address
			token: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WPOL token address on Polygon
			apy: "12", // Placeholder APY (replace with actual value)
			dec: "18", // WPOL decimals from deployment trace
			tvl: "1000", // Placeholder TVL (replace with actual value)
		  },
		  {
			name: "USDC",
			address: "0x3f93F66b04Fa9fA6249f2323d1935f7254930C21", // USDC LiquidityPool address
			token: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC token address on Polygon
			apy: "10", // Placeholder APY (replace with actual value)
			dec: "6", // USDC decimals from deployment trace
			tvl: "1045474", // Placeholder TVL (replace with actual value)
		  },
		  {
			name: "DAI",
			address: "0x51e3Da9A54eB57920DAD51E36ff4eD35803085f3", // DAI LiquidityPool address
			token: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI token address on Polygon
			apy: "8", // Placeholder APY (replace with actual value)
			dec: "18", // DAI decimals from deployment trace
			tvl: "500", // Placeholder TVL (replace with actual value)
		  },
		],
		pool: {
		  WBTC: {
			address: "0x2e2A0Deb39bAAe4C3E43EcA0A345e2f0625b7Cf2", // WBTC LiquidityPool address
			token: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6", // WBTC token address
			apy: "6", // Placeholder APY (replace with actual value)
			dec: "8", // WBTC decimals
			tvl: "120", // Placeholder TVL (replace with actual value)
		  },
		  WPOL: {
			address: "0x02D84726680ABF105f6a0532FE6eB85e3289455A", // WPOL LiquidityPool address
			token: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WPOL token address
			apy: "12", // Placeholder APY (replace with actual value)
			dec: "18", // WPOL decimals
			tvl: "1000", // Placeholder TVL (replace with actual value)
		  },
		  USDC: {
			address: "0x3f93F66b04Fa9fA6249f2323d1935f7254930C21", // USDC LiquidityPool address
			token: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC token address
			apy: "10", // Placeholder APY (replace with actual value)
			dec: "6", // USDC decimals
			tvl: "1045474", // Placeholder TVL (replace with actual value)
		  },
		  DAI: {
			address: "0x51e3Da9A54eB57920DAD51E36ff4eD35803085f3", // DAI LiquidityPool address
			token: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", // DAI token address
			apy: "8", // Placeholder APY (replace with actual value)
			dec: "18", // DAI decimals
			tvl: "500", // Placeholder TVL (replace with actual value)
		  },
		},
	  },
	};
module.exports = {
	networkConfig,
	uiConfig,
};
