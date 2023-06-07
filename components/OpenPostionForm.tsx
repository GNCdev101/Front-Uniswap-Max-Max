"use client";

import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";
import Button from "./Button";
import Extern from "./Extern";

function OpenPostionForm() {
	const [addPool, setAddPool] = useState("");
	const [addTokenToTrade, setAddTokenToTrade] = useState("");
	const [isShort, setIsShort] = useState(false);
	const [amount, setAmount] = useState(0);
	const [limitPrice, setLimitPrice] = useState(0);
	const [stopPrice, setStopPrice] = useState(0);

	const [selectedValue, setSelectedValue] = useState("long");
	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(e.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(`addPool: ${addPool} \n
			addTokenToTrade: ${addTokenToTrade} \n
			isShort: ${isShort} \n
			leverage: ${sliderValue} \n
			amount: ${amount} \n
			limitPrice: ${limitPrice} \n
			stopPrice: ${stopPrice} \n`);
	};
	const [sliderValue, setSliderValue] = useState(1);

	const handleSliderChange = (e: any) => {
		setSliderValue(e.target.value);
	};

	return (
		<div className="flex flex-col gap-6" style={{ height: "calc(100% - 6rem)" }}>
			<nav className="glass-container-darker w-fit px-6 py-2" style={{ borderRadius: "2.5rem" }}>
				<ul
					className="open-position-switch flex flex-row items-center justify-center gap-2 md:text-xl text-sm"
					style={{ fontStretch: "expanded" }}
				>
					<li>
						<input
							type="radio"
							id="long"
							name="position"
							value="long"
							checked={selectedValue === "long"}
							onChange={handleChange}
						/>
						<label htmlFor="long">Long</label>
					</li>
					<li>
						<input type="radio" id="short" name="position" value="short" onChange={handleChange} />
						<label htmlFor="short">Short</label>
					</li>
					<li>
						<input type="radio" id="swap" name="position" value="swap" onChange={handleChange} />
						<label htmlFor="swap">Swap</label>
					</li>
				</ul>
			</nav>
			{selectedValue === "long" || selectedValue === "short" ? (
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<article className="glass-container flex flex-col gap-6 rounded-3xl md:p-6 p-4">
						<div className="flex flex-col gap-1">
							<label className="text-sm text-neutral-300" htmlFor="token-to-send">
								Token to send address
							</label>
							<input
								id="token-to-send"
								type="text"
								maxLength={42}
								minLength={42}
								className="w-full glass-input glass-input-small"
								inputMode="text"
								style={{ lineHeight: "1.5rem" }}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label className="text-sm text-neutral-300" htmlFor="token-to-send">
								Token to trade address
							</label>
							<input
								id="token-to-trade"
								type="text"
								maxLength={42}
								minLength={42}
								className="w-full glass-input glass-input-small"
								inputMode="text"
								style={{ lineHeight: "1.5rem" }}
							/>
						</div>
					</article>
					<article className="glass-container flex flex-col gap-4 rounded-3xl md:p-6 p-4">
						<div className="grid grid-cols-[0.25fr,1fr] items-center gap-2">
							<label className="text-sm text-neutral-300" htmlFor="token-to-send">
								Amount to trade
							</label>
							<input
								id="amount-to-trade"
								type="number"
								min={0}
								className="w-full glass-input glass-input-large"
								inputMode="numeric"
							/>
						</div>
						<div className="grid grid-cols-[0.25fr,1fr] items-center gap-2">
							<label className="text-sm text-neutral-300" htmlFor="token-to-send">
								Limit price
							</label>
							<input
								id="limite-price"
								type="number"
								min={0}
								className="w-full glass-input glass-input-large"
								inputMode="numeric"
							/>
						</div>
						<div className="grid grid-cols-[0.25fr,1fr] items-center gap-2">
							<label className="text-sm text-neutral-300" htmlFor="token-to-send">
								Stop loss
							</label>
							<input
								id="stop-loss"
								type="number"
								min={0}
								className="w-full glass-input glass-input-large"
								inputMode="numeric"
							/>
						</div>
					</article>
					<article className="glass-container flex flex-col gap-4 rounded-3xl md:p-6 p-4">
						<div className="grid grid-cols-[0.25fr,1fr] items-center gap-4">
							<label className="flex flex-row gap-1 text-sm text-neutral-300" htmlFor="token-to-send">
								<span>Leverage:</span>
								<span className="font-bold text-neutral-300" style={{ fontStretch: "expanded" }}>
									{sliderValue}
								</span>
							</label>
							<input
								id="leverage"
								type="range"
								step={1}
								min={1}
								max={5}
								className="w-full"
								value={sliderValue}
								onChange={handleSliderChange}
							/>
						</div>
					</article>
				</form>
			) : (
				<article className="glass-container flex flex-col gap-6 rounded-3xl md:p-8 p-4">
					<div className="flex justify-center">
						<Button type="a" style="ghost" to="https://app.uniswap.org/#/swap" size="md">
							<span>Go to Uniswap</span>
							<Extern />
						</Button>
					</div>
				</article>
			)}
		</div>
		// <form className="flex flex-col" onSubmit={handleSubmit}>
		// 	<label className="mt-2">
		// 		Uniswap V3 pool address:
		// 		<input
		// 			className="bg-green-900"
		// 			type="text"
		// 			value={addPool}
		// 			onChange={(e) => setAddPool(e.target.value)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		Token to trade address:
		// 		<input
		// 			className="bg-green-900"
		// 			type="text"
		// 			value={addTokenToTrade}
		// 			onChange={(e) => setAddTokenToTrade(e.target.value)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		Amount to trade:
		// 		<input
		// 			className="bg-green-900"
		// 			type="number"
		// 			value={amount}
		// 			onChange={(e) => setAmount(e.target.valueAsNumber)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		Limit price:
		// 		<input
		// 			className="bg-green-900"
		// 			type="number"
		// 			value={limitPrice}
		// 			onChange={(e) => setLimitPrice(e.target.valueAsNumber)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		Stop loss:
		// 		<input
		// 			className="bg-green-900"
		// 			type="number"
		// 			value={stopPrice}
		// 			onChange={(e) => setStopPrice(e.target.valueAsNumber)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		{/*Faire un toggle pour choisir entre long et short */}
		// 		Is short position:
		// 		<input
		// 			type="checkbox"
		// 			id="myCheckbox"
		// 			checked={isShort}
		// 			onChange={(e) => setIsShort(e.target.checked)}
		// 		/>
		// 	</label>
		// 	<label className="mt-2">
		// 		Leverage:
		// 		<Slider
		// 			className="mx-12"
		// 			min={1}
		// 			max={5}
		// 			step={1}
		// 			value={leverage}
		// 			onChange={handleSliderChange}
		// 			railStyle={{ backgroundColor: "#e5e7eb" }}
		// 			trackStyle={{ backgroundColor: "#10b981" }}
		// 			handleStyle={{ backgroundColor: "#10b981", borderColor: "#10b981" }}
		// 		/>
		// 	</label>

		// 	<input className="bg-slate-400" type="submit" />
		// </form>
	);
}

export default OpenPostionForm;
