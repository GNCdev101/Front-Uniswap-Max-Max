"use client";

import React from "react";
import Button from "./Button";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "@/abi/market.abi.json";
import { liquidityPoolABI } from "@/abi/liquidityPool.abi.json";
import { ERC20ABI } from "@/abi/ERC20.abi.json";
import { useEffect, useState } from "react";
import { networkConfig } from "@/helper-config.js";
import Image from "next/image";

interface LiquidityCardProps {
	asset: string;
	address: string;
	apy: number;
	volume: number;
	useRate: number;
}
type addressT = `0x${string}`;

function LiquidityCard(props: LiquidityCardProps) {
	const { isConnected, address } = useAccount();

	const [balanceShare, setBalanceShare] = useState<string | unknown>("1");
	const [balanceAsset, setBalanceAsset] = useState<string | unknown>("0");
	const [amount, setAmount] = useState<bigint | undefined>();
	const asset = props.asset as keyof (typeof networkConfig)[1]["pool"];
	const dec = parseInt(networkConfig[1]["pool"][asset]["dec"] as string);
	const addToken = networkConfig[1]["pool"][asset]["token"] as addressT;
	const poolAddress = networkConfig[1]["pool"][asset]["address"] as addressT;

	const { config: approveConf } = usePrepareContractWrite({
		address: addToken,
		abi: ERC20ABI,
		functionName: "approve",
		args: [poolAddress, amount],
	});
	const { config: depositConf } = usePrepareContractWrite({
		address: poolAddress,
		abi: liquidityPoolABI,
		functionName: "deposit",
		args: [amount, address],
	});
	const { config: withdrawConf } = usePrepareContractWrite({
		address: poolAddress,
		abi: liquidityPoolABI,
		functionName: "withdraw",
		args: [amount, address, address],
	});

	// const { config: pauseConf } = usePrepareContractWrite({
	// 	address: networkConfig[1]["addressMarket"] as addressT,
	// 	abi: marketABI,
	// 	functionName: "pause",
	// });

	const { write: deposit, isSuccess: isSuccessDeposit, isLoading: isLoadingDeposit } = useContractWrite(depositConf);
	const { write: approve, isSuccess: isSuccessApprove, isLoading: isLoadingApprove } = useContractWrite(approveConf);
	const {
		write: withdraw,
		isSuccess: isSuccessWithdraw,
		isLoading: isLoadingWithdraw,
	} = useContractWrite(withdrawConf);

	const {
		data: balanceShareTemp,
		isSuccess: isSuccessBalanceShare,
		isLoading: isLoadingBalanceShare,
	} = useContractRead({
		address: poolAddress,
		abi: liquidityPoolABI,
		functionName: "balanceOf",
		args: [address],
	});

	const {
		data: balanceAssetTemp,
		isSuccess: isSuccessBalanceAsset,
		isLoading: isLoadingBalanceAsset,
	} = useContractRead({
		address: poolAddress,
		abi: liquidityPoolABI,
		functionName: "convertToAssets",
		args: [balanceShare],
	});

	const [selectedValue, setSelectedValue] = useState("deposit");
	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(e.target.value);
	};

	useEffect(() => {
		if (typeof balanceShareTemp === "bigint") {
			setBalanceShare(balanceShareTemp.toString());
		}
		if (typeof balanceAssetTemp === "bigint") {
			setBalanceAsset(balanceAssetTemp.toString());
		}
	}, [balanceShareTemp, balanceAssetTemp, isConnected, amount]);

	return (
		<div className="liquidity-card-container text-neutral-300">
			<div className="flex flex-col md:gap-6 gap-2">
				<div className="glass-container flex flex-col gap-2 rounded-3xl md:p-8 p-4">
					<div className="flex flex-row gap-2 items-center">
						<Image src={`/icons/${props.asset}.svg`} width={40} height={40} alt={`${props.asset} logo`} />
						<h2 className="text-3xl" style={{ fontStretch: "expanded" }}>
							{props.asset}
						</h2>
					</div>
					<p className="md:text-lg text-sm text-neutral-400">Liquidity Pool</p>
				</div>
				<div className="glass-container flex flex-col gap-6 rounded-3xl md:p-8 p-4">
					<div className="flex flex-row items-center justify-center gap-4">
						<input
							type="number"
							id={`${props.asset}-input`}
							className="w-full glass-input glass-input-large"
							min="0"
							inputMode="numeric"
							pattern="\d*"
							onChange={(event) => {
								const inputValue = event.target.value;
								if (inputValue) {
									const floatValue = parseFloat(inputValue);
									const scaledValue = floatValue * 10 ** dec;
									try {
										setAmount(BigInt(Math.round(scaledValue)));
									} catch (e) {
										console.error(e);
										setAmount(undefined);
									}
								} else {
									setAmount(undefined);
								}
							}}
						/>
						<label htmlFor={`${props.asset}-input`} className="md:text-2xl text-lg text-neutral-400">
							{props.asset}
						</label>
					</div>
					<nav className="glass-container-darker w-fit px-6 py-2" style={{ borderRadius: "2.5rem" }}>
						<div className="flex flex-row items-center justify-center gap-2 md:text-xl text-sm p-2">
							{/* <ul
							className="open-position-switch flex flex-row items-center justify-center gap-2 md:text-xl text-sm"
							style={{ fontStretch: "expanded" }}
						>
							<li>
								<input
									type="radio"
									id="deposit"
									name="position"
									value="deposit"
									checked={selectedValue === "deposit"}
									onChange={handleChange}
								/>
								<label htmlFor="long" className="flex flex-row gap-2">
									<span>📥</span>
									<span>Deposit</span>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="withdraw"
									name="position"
									value="withdraw"
									// onChange={withdraw}
									onClick={() => approve?.()}
								/>
								<label htmlFor="short" className="flex flex-row gap-2">
									<span>📤</span>
									<span>Withdraw</span>
								</label>
							</li>
						</ul> */}
							<div className="pr-5">
								<Button type="button" size="md" style="solid" onClick={() => deposit?.()} disabled={!deposit}>
									<span>📥</span>
									<span>Deposit</span>
								</Button>
							</div>

							<Button type="button" size="md" style="ghost" onClick={() => withdraw?.()}>
								<span>📤</span>
								<span>Withdraw</span>
							</Button>
						</div>
					</nav>
					<div className="flex justify-center">
						<Button type="button" size="xs" style="solid" onClick={() => approve?.()}>
							🔓 Approve
						</Button>
					</div>
				</div>
			</div>
			<div className="md:flex md:flex-col grid grid-cols-4 grid-rows-1 gap-2 h-fit">
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-6 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">
						{isLoadingBalanceAsset ? "-" : (balanceAsset as number) / 10 ** dec}
					</p>
					<h4 className="md:text-lg text-sm text-neutral-400">Your balance</h4>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-6 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.apy}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">APY</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-6 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.useRate}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Utilization rate</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-6 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.volume.toLocaleString("en-US", {})}</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Total deposit</h3>
				</article>
			</div>
		</div>
	);
}

export default LiquidityCard;
