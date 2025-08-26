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
				fees: [0.05, 0.3, 1],
			},
			{
				name: "USDC",
				address: "0xE4FAEc0F9344dF83E71C4E0043e058304ACbcC09",
				token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
				apy: "10",
				dec: "6",
				tvl: "1045474",
				fees: [0.05, 0.3, 1],
			},
			{
				name: "WBTC",
				address: "0xF2feC1B0A1ec000132A9E92e9d70ad96E93691b4",
				token: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
				apy: "6",
				dec: "8",
				tvl: "120",
				fees: [0.05, 0.3, 1],
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
	137: {
		name: "polygon",
		addressMarket: "0x0000000000000000000000000000000000000000",
		addressPositions: "0x0000000000000000000000000000000000000000",
		pools: [
			{
				name: "WETH",
				address: "0x0000000000000000000000000000000000000000",
				token: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
				apy: "12",
				dec: "18",
				tvl: "1000",
				fees: [0.05, 0.3, 1],
			},
			{
				name: "USDC",
				address: "0x0000000000000000000000000000000000000000",
				token: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
				apy: "10",
				dec: "6",
				tvl: "1045474",
				fees: [0.05, 0.3, 1],
			},
			{
				name: "WBTC",
				address: "0x0000000000000000000000000000000000000000",
				token: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
				apy: "6",
				dec: "8",
				tvl: "120",
				fees: [0.05, 0.3, 1],
			},
		],
		pool: {
			WETH: {
				address: "0x0000000000000000000000000000000000000000",
				token: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
				apy: "12",
				dec: "18",
				tvl: "1000",
			},
			USDC: {
				address: "0x0000000000000000000000000000000000000000",
				token: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
				apy: "10",
				dec: "6",
				tvl: "1045474",
			},
			WBTC: {
				address: "0x0000000000000000000000000000000000000000",
				token: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
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

/*
MetaMask - RPC Error: MetaMask Tx Signature: User denied transaction signature. {code: 4001, message: 'MetaMask Tx Signature: User denied transaction signature.'}

TransactionExecutionError: User rejected the request.

Request Arguments:
  from:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  to:    0xa85EffB2658CFd81e0B1AaD4f2364CdBCd89F3a1
  data:  0x4ee0b4da0000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c599000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000bebc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Details: MetaMask Tx Signature: User denied transaction signature.
Version: viem@0.3.50
*/
