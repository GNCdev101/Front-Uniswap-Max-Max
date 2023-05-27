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
		<div className="w-full">
			<GradientCanvas>
				<Gradient type={type} color1="#8903ff" color2="#712b31" color3="#350062" uSpeed={0.1} cDistance={4} />
			</GradientCanvas>
			<TextReveal />
		</div>
	);
}
