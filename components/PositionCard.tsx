import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";
import Button from "./Button";

interface PositionCardProps {
	posId: number;
}

function PositionCard(props: PositionCardProps) {
	return (
		<div className="glass-container flex flex-col gap-4 rounded-full px-12 py-6">
			<div className="grid grid-cols-6 grid-rows-1 justify-between gap-8">
				<div className="grid grid-cols-4 grid-rows-1 items-center gap-4" style={{ gridArea: "1 / 1 / 2 / 4" }}>
					<p className="text-neutral-300 font-bold tracking-wide">ETH/DAI</p>
					<div className="flex items-center justify-center">
						<p className="box-container py-1 text-neutral-300 flex flex-row gap-2" style={{ fontStretch: "expanded" }}>
							<span>Short</span> <span>📉</span>
						</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="text-neutral-300 tracking-wide">4x</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="text-neutral-300 tracking-wide">1000 <span className="font-bold" style={{ fontStretch: "expanded" }}>DAI</span></p>
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-1 items-center gap-4" style={{ gridArea: "1 / 5 / 2 / 7" }}>
					<div className="flex items-center justify-center">
						<p className="flex flex-row gap-1 text-neutral-300 tracking-wide"><span>+100</span> <em>(900)</em></p>
					</div>
					<Button style="solid" type="button" size="xs">Close position</Button>
				</div>
			</div>
		</div>
		// <div className="flex flex-row bg-orange-500 m-12 items-center text-center justify-between">
		// 	<div className="flex flex-row">
		// 		{/* Pair ex : ETH/USDT */}
		// 		<div className="mx-3">
		// 			{"ETH"}/{"DAI"}
		// 		</div>
		// 		{/* Direction ex : LONG/SHORT */}
		// 		<div className="mx-3">
		// 			{props.posId % 2 == 0 ? (
		// 				<div className="text-green-600">LONG</div>
		// 			) : (
		// 				<div className="text-red-600">SHORT</div>
		// 			)}
		// 		</div>
		// 		{/* Leverage ex : x3 */}
		// 		<div className="mx-3">X{props.posId}</div>
		// 		{/* Size ex : 1000 DAI */}
		// 		<div className="mx-3">{props.posId + 1000} DAI</div>
		// 	</div>
		// 	<button className="m-4 bg-red-900 justify-end">Close position</button>
		// </div>
	);
}

export default PositionCard;
