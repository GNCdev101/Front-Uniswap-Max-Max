"use client";

import { GradientCanvas } from "shadergradient";
import { Gradient } from "shadergradient";
import React from "react";
import TextReveal from "@/components/TextReveal";

export default function Home() {
	type GradientType = "sphere" | "waterPlane" | "plane";
	const [type, setType] = React.useState("sphere" as GradientType);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setType("waterPlane");
		}, 3000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="w-screen h-full">
			<GradientCanvas>
				<Gradient type={type} color1="#8903ff" color2="#712b31" color3="#350062" uSpeed={0.1} cDistance={4} />
			</GradientCanvas>
			<div className="front-page-content">
				<div className="flex justify-center items-center h-screen">
					<TextReveal />
				</div>
				<div className="fit-content h-screen pt-32">
					<div className="flex flex-col justify-center items-center text-center gap-4">
						<h2 className="text-neutral-300 text-5xl leading-relaxed" style={{fontStretch: "expanded"}}>
							Introducing Uniswap Max
						</h2>
						<p className="text-neutral-400 text-3xl leading-snug">A Decentralized Trading Platform<br /> Built on Top of Uniswap!</p>
					</div>
					{/* <div className="front-page-introduction rounded-3xl p-8 flex flex-col gap-4 text-4xl text-neutral-300 leading-loose">
						<p>
							Introducing Uniswap Max, a decentralized trading platform built on top of Uniswap!
						</p>
						<p>
							Uniswap Max is the next generation of decentralize trading tools. We've built it to be as easy-to-use as possible, so even if you're new to crypto trading, we'll have your back.
						</p>
						<p>
							Our features include: stop loss, limit orders and margin trading—so you can set your own rules for each trade. We also offer leverage and shorting options, which give you the opportunity to earn bigger profits (or lose more money).
						</p>
						<p>
							Even if you're not a trader, you can still unlock the power of Uniswap Max by becoming a liquidity provider to margin traders and earning a competitive APY.
						</p>
					</div> */}
				</div>
			</div>
		</div>
	);
}
