"use client"

import { GradientCanvas } from "shadergradient";
import { Gradient } from "shadergradient";

export default function Home() {
	return (
		<GradientCanvas pointerEvents="none">
			<Gradient cDistance={2.5} color1="#3A0606" color2="#174655" color3="#F3F5ED" type="waterPlane" grain="off" />
		</GradientCanvas>
	);
}
