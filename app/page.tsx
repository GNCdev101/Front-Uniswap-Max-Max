"use client";

import { GradientCanvas } from "shadergradient";
import { Gradient } from "shadergradient";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Div = styled.div`
	${css`
		--gradient: linear-gradient(90deg, #000000 0%, #ffffff 100%);
	`}
	width: 100%;
	height: 100%;
	background: var(--gradient);
`;

const Patate = styled.p`
	color: red;
`;

export default function Home() {
	return (
		<GradientCanvas
			// pointerEvents="none"
		>
			<Gradient 
				animate='on'
				// axesHelper='off'
				//bgColor1='#000000'
				//bgColor2='#000000'
				brightness={1.5}
				cAzimuthAngle={250}
				cDistance={1.5}
				cPolarAngle={140}
				cameraZoom={12.5}
				color1='#2f88d6'
				color2='#ff617b'
				color3='#ff991c'
				//embedMode='off'
				envPreset='city'
				//fov={45}
				//gizmoHelper='hide'
				grain='on'
				lightType='3d'
				//pixelDensity={1}
				positionX={0}
				positionY={0}
				positionZ={0}
				reflection={0.5}
				rotationX={0}
				rotationY={0}
				rotationZ={140}
				shader='positionMix'
				toggleAxis={false}
				type='plane'
				uAmplitude={7}
				uDensity={0.8}
				uFrequency={5.5}
				uSpeed={0.1}
				uStrength={3.4}
				uTime={0}
				wireframe={false}
			/>
		</GradientCanvas>
	);

	// return (
	// 	<Div>
	// 		<div>patate</div>
	// 		<Patate>Hello World.</Patate>
	// 	</Div>
	// );
}
