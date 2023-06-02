import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";

interface PositionCardProps {
	posId: number;
}

function PositionCard(props: PositionCardProps) {
	return (
		<div className="flex flex-row bg-orange-500 m-12 items-center text-center justify-between">
			<div className="flex flex-row">
				{/* Pair ex : ETH/USDT */}
				<div className="mx-3">
					{"ETH"}/{"DAI"}
				</div>
				{/* Direction ex : LONG/SHORT */}
				<div className="mx-3">
					{props.posId % 2 == 0 ? (
						<div className="text-green-600">LONG</div>
					) : (
						<div className="text-red-600">SHORT</div>
					)}
				</div>
				{/* Leverage ex : x3 */}
				<div className="mx-3">X{props.posId}</div>
				{/* Size ex : 1000 DAI */}
				<div className="mx-3">{props.posId + 1000} DAI</div>
			</div>
			<button className="m-4 bg-red-900 justify-end">Close position</button>
		</div>
	);
}

export default PositionCard;
