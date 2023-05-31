"use client";

import { GradientCanvas } from "shadergradient";
import { Gradient } from "shadergradient";
import React from "react";
import TextReveal from "@/components/TextReveal";

export default function Home() {
	type GradientType = "sphere" | "waterPlane" | "plane";
	const [type, setType] = React.useState("sphere" as GradientType);
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("introduction-reveal");
						setType("waterPlane");
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.8,
			},
		);
		observer.observe(document.getElementById("introduction")!);
	}, []);

	const features: [emoji: string, feature: string][] = [
		["⛔️", "Stop Loss"],
		["🎯", "Limit Order"],
		["💰", "Margin Trading"],
		["🔁", "Leverage"],
		["⬇️", "Short Selling"],
	];

	return (
		<div className="w-screen h-full">
			<GradientCanvas>
				<Gradient type={type} color1="#D61C4E" color2="#5800FF" color3="#000000" grain="off" uSpeed={0.1} cDistance={4} />
				{/* <Gradient
					control="query"
          			// @ts-ignore
					urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2357caff&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false"
				/> */}
			</GradientCanvas>
			<div className="front-page-content">
				<div className="flex justify-center items-center h-screen">
					<TextReveal />
				</div>
				{/* INTRODUCTION */}
				<div className="fit-content flex items-center justify-center h-screen" id="introduction">
					<div className="flex flex-col introduction-container md:mt-0 mt-8">
						<div className="front-page-introduction-title opacity-0 flex flex-col justify-center items-center text-center gap-6">
							<h2 className="text-neutral-300 lg:text-5xl md:text-3xl text-xl leading-relaxed" style={{ fontStretch: "expanded" }}>
								Introducing Uniswap Max
							</h2>
							<p className="text-neutral-400 lg:text-3xl md:text-xl text-lg leading-snug">
								A Decentralized Trading Platform
								<br /> Built on Top of Uniswap!
							</p>
						</div>
						<div className="flex justify-center">
							<article className="front-page-introduction-text opacity-0 max-w-prose rounded-3xl md:p-8 p-4 flex flex-col gap-4">
								<p className="text-neutral-300 lg:text-xl md:text-md text-sm leading-relaxed text-center">
									Uniswap Max is the next generation of decentralize trading tools. We’ve built it to be
									as easy-to-use as possible, so even if you’re new to crypto trading, we’ll have your
									back.
								</p>
								<p className="text-neutral-300 lg:text-xl md:text-md text-sm leading-relaxed text-center">
									Our features include:
								</p>
							</article>
						</div>
						<ul className="lg:flex lg:flex-row md:gap-4 gap-2 justify-between grid grid-cols-2 grid-rows-3">
							{features.map((value, index) => {
								return (
									<li key={index} className={`box-container opacity-0 front-page-introduction-feature-${index} shadow-light-50 select-none`}>
										<div
											className="md:py-4 py-2 text-neutral-300 font-bold flex flex-row gap-2 items-center justify-center lg:text-sm text-xs"
											style={{ fontStretch: "expanded" }}
										>
											<span>{value[0]}</span>
											<span>{value[1]}</span>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
