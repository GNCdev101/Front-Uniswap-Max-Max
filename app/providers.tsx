"use client";

import * as React from "react";
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet, polygon, goerli],
	[publicProvider()],
);

const projectId = "90fd7d34d14f7542a32dc09a98ce2e4a";

const { wallets } = getDefaultWallets({
	appName: "RainbowKit demo",
	projectId,
	chains,
});

const demoAppInfo = {
	appName: "Uniswap Max",
};

const connectors = connectorsForWallets([
	...wallets,
	{
		groupName: "Other",
		wallets: [
			argentWallet({ projectId, chains }),
			trustWallet({ projectId, chains }),
			ledgerWallet({ projectId, chains }),
		],
	},
]);

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => setMounted(true), []);
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
				{mounted && children}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
