import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { ERC20ABI } from "@/abi/ERC20.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";
import { networkConfig } from "@/helper-config.js";
import Button from "./Button";

interface PositionCardProps {
	posId: number;
}
type addressT = `0x${string}`;

function PositionCard(props: PositionCardProps) {
	const marketAddress = networkConfig[1]["addressMarket"] as addressT;
	const positionsAddress = networkConfig[1]["addressPositions"] as addressT;

	const [addBaseToken, setAddBaseToken] = useState("");
	const [addQuoteToken, setAddQuoteToken] = useState("");
	const [isShort, setIsShort] = useState(false);
	const [leverage, setleverage] = useState(1);
	const [amount, setAmount] = useState(0);
	const [pnl, setPnl] = useState(0);
	const [collLeft, setCollLeft] = useState(0);

	const [decBaseToken, setDecBaseToken] = useState(0);
	const [decQuoteToken, setDecQuoteToken] = useState(0);
	const [nameBaseToken, setNameBaseToken] = useState("");
	const [nameQuoteToken, setNameQuoteToken] = useState("");

	const { config: closePosConf } = usePrepareContractWrite({
		address: marketAddress,
		abi: marketABI,
		functionName: "closePosition",
		args: [props.posId],
	});

	const { write: closePosition } = useContractWrite(closePosConf);

	const { data: posData } = useContractRead({
		address: marketAddress as addressT,
		abi: marketABI,
		functionName: "getPositionParams",
		args: [props.posId],
	}) as { data: any[] };

	const { data: decBaseTokenTemp } = useContractRead({
		address: addBaseToken as addressT,
		abi: ERC20ABI,
		functionName: "decimals",
		args: [],
	});
	const { data: decQuoteTokenTemp } = useContractRead({
		address: addQuoteToken as addressT,
		abi: ERC20ABI,
		functionName: "decimals",
		args: [],
	});

	const { data: nameBaseTokenTemp } = useContractRead({
		address: addBaseToken as addressT,
		abi: ERC20ABI,
		functionName: "symbol",
		args: [],
	});
	const { data: nameQuoteTokenTemp } = useContractRead({
		address: addQuoteToken as addressT,
		abi: ERC20ABI,
		functionName: "symbol",
		args: [],
	});

	useEffect(() => {
		// console.log(posData);
		if (posData) {
			setAddBaseToken(posData[0]);
			setAddQuoteToken(posData[1]);
			setAmount(Number(posData[2]));
			setIsShort(posData[4]);
			setleverage(posData[5]);
			setPnl(Number(posData[9]));
			setCollLeft(Number(posData[10]));
		}
		setNameBaseToken(nameBaseTokenTemp as string);
		setNameQuoteToken(nameQuoteTokenTemp as string);

		setDecBaseToken(decBaseTokenTemp as number);
		setDecQuoteToken(decQuoteTokenTemp as number);
	}, [nameBaseTokenTemp, nameQuoteTokenTemp, decBaseTokenTemp, decQuoteTokenTemp, posData]);

	return (
		<div className="glass-container flex flex-col gap-4 rounded-full px-12 py-6">
			<div className="grid grid-cols-6 grid-rows-1 justify-between gap-8">
				<div className="grid grid-cols-4 grid-rows-1 items-center gap-4" style={{ gridArea: "1 / 1 / 2 / 4" }}>
					<p className="text-neutral-300 font-bold tracking-wide">
						{nameBaseToken}/{nameQuoteToken}
					</p>
					<div className="flex items-center justify-center">
						<p
							className="box-container py-1 text-neutral-300 flex flex-row gap-2"
							style={{ fontStretch: "expanded" }}
						>
							{isShort ? (
								<div>
									<span>Short</span> <span>📉</span>
								</div>
							) : (
								<div>
									<span>Long</span> <span>📈</span>
								</div>
							)}
						</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="text-neutral-300 tracking-wide">{leverage}x</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="text-neutral-300 tracking-wide">
							{amount / 10 ** (isShort ? Number(decQuoteTokenTemp) : Number(decBaseTokenTemp))}{" "}
							<span className="font-bold" style={{ fontStretch: "expanded" }}>
								{isShort ? nameQuoteToken : nameBaseToken}
							</span>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-1 items-center gap-4" style={{ gridArea: "1 / 5 / 2 / 7" }}>
					<div className="flex items-center justify-center">
						<p className="flex flex-row gap-1 text-neutral-300 tracking-wide">
							<span>{pnl / 10 ** (isShort ? Number(decQuoteTokenTemp) : Number(decBaseTokenTemp))}</span>{" "}
							<em>
								({collLeft / 10 ** (isShort ? Number(decQuoteTokenTemp) : Number(decBaseTokenTemp))})
							</em>
						</p>
					</div>
					<Button
						style="solid"
						type="button"
						size="xs"
						onClick={() => {
							closePosition?.();
						}}
					>
						Close position
					</Button>
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
