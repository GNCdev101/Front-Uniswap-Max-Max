"use client";
import LiquidityCard from "../../../components/LiquidityCard";
import { networkConfig } from "../../../helper-config.js";
import { useNetwork } from "wagmi";

export default function EarnTokenPage({ params }: { params: { slug: string } }) {
	const { chain } = useNetwork();
	const chainId = (chain?.id && chain.id in networkConfig ? chain.id : 1) as keyof typeof networkConfig;
	const pool = networkConfig[chainId].pools.find((pool) => pool.name === params.slug.toUpperCase());
	if (!pool) {
		return (
			<div>
				<p className="text-neutral-300 text-4xl">Pool {params.slug} not found</p>
			</div>
		);
	}
	return (
		<main className="flex flex-row justify-center">
			<LiquidityCard
				asset={pool.name}
				address={pool.address}
				apy={parseFloat(pool.apy)}
				volume={parseFloat(pool.tvl)}
				useRate={20}
			/>
		</main>
	);
}