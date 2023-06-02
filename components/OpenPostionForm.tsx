"use client";

import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";

import Slider from "rc-slider";

interface OpenPostionFormProps {
	asset: string;
	address: string;
	apy: number;
	volume: number;
	useRate: number;
}

function OpenPostionForm(props: OpenPostionFormProps) {
	const [addPool, setAddPool] = useState("");
	const [addTokenToTrade, setAddTokenToTrade] = useState("");
	const [isShort, setIsShort] = useState(false);
	const [leverage, setLeverage] = useState(1);
	const [amount, setAmount] = useState(0);
	const [limitPrice, setLimitPrice] = useState(0);
	const [stopPrice, setStopPrice] = useState(0);

	const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`addPool: ${addPool} \n
addTokenToTrade: ${addTokenToTrade} \n
isShort: ${isShort} \n
leverage: ${leverage} \n
amount: ${amount} \n
limitPrice: ${limitPrice} \n
stopPrice: ${stopPrice} \n`);
	};
	const handleSliderChange = (value: any) => {
		setLeverage(value);
	};
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<label className="mt-2">
				Uniswap V3 pool address:
				<input
					className="bg-green-900"
					type="text"
					value={addPool}
					onChange={(e) => setAddPool(e.target.value)}
				/>
			</label>
			<label className="mt-2">
				Token to trade address:
				<input
					className="bg-green-900"
					type="text"
					value={addTokenToTrade}
					onChange={(e) => setAddTokenToTrade(e.target.value)}
				/>
			</label>
			<label className="mt-2">
				Amount to trade:
				<input
					className="bg-green-900"
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.valueAsNumber)}
				/>
			</label>
			<label className="mt-2">
				Limit price:
				<input
					className="bg-green-900"
					type="number"
					value={limitPrice}
					onChange={(e) => setLimitPrice(e.target.valueAsNumber)}
				/>
			</label>
			<label className="mt-2">
				Stop loss:
				<input
					className="bg-green-900"
					type="number"
					value={stopPrice}
					onChange={(e) => setStopPrice(e.target.valueAsNumber)}
				/>
			</label>
			<label className="mt-2">
				{/*Faire un toggle pour choisir entre long et short */}
				Is short position:
				<input
					type="checkbox"
					id="myCheckbox"
					checked={isShort}
					onChange={(e) => setIsShort(e.target.checked)}
				/>
			</label>
			<label className="mt-2">
				Leverage:
				<Slider
					className="mx-12"
					min={1}
					max={5}
					step={1}
					value={leverage}
					onChange={handleSliderChange}
					railStyle={{ backgroundColor: "#e5e7eb" }}
					trackStyle={{ backgroundColor: "#10b981" }}
					handleStyle={{ backgroundColor: "#10b981", borderColor: "#10b981" }}
				/>
			</label>

			<input className="bg-slate-400" type="submit" />
		</form>
	);
}

export default OpenPostionForm;
