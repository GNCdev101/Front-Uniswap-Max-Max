import React from "react";
import Button from "./Button";

interface LiquidityCardProps {
	asset: string;
	address: string;
	apy: number;
	volume: number;
	useRate: number;
}

function LiquidityCard(props: LiquidityCardProps) {
	return (
		<div className="liquidity-card-container text-neutral-300">
			<div className="flex flex-col md:gap-8 gap-2">
				<div className="glass-container flex flex-col gap-1 rounded-3xl md:p-8 p-4">
					<h2 className="text-3xl" style={{ fontStretch: "expanded" }}>
						{props.asset}
					</h2>
					<p className="md:text-lg text-sm text-neutral-400">Liquidity Pool</p>
				</div>
				<div className="glass-container flex flex-col gap-6 rounded-3xl md:p-8 p-4">
					<div className="flex flex-row items-center justify-center gap-4">
						<input
							type="number"
							id={`${props.asset}-input`}
							className="w-full"
							min="0"
							inputMode="numeric"
							pattern="\d*"
						/>
						<label htmlFor={`${props.asset}-input`} className="md:text-2xl text-lg text-neutral-400">
							{props.asset}
						</label>
					</div>
					<div className="grid grid-cols-2 grid-rows-1 gap-4">
						<Button type="button" size="lg" style="solid">
							📥 Deposit
						</Button>
						<Button type="button" size="lg" style="ghost">
							📤 Withdraw
						</Button>
					</div>
				</div>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">0 {props.asset}</p>
					<h4 className="md:text-lg text-sm text-neutral-400">Your deposit</h4>
				</article>
			</div>
			<div className="md:flex md:flex-col md:gap-8 grid grid-cols-3 grid-rows-1 gap-2 h-fit">
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.apy}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">APY</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.useRate}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Utilization rate</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.volume.toLocaleString("en-US", {})}</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Total deposit</h3>
				</article>
			</div>
		</div>
	);
}

export default LiquidityCard;
