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
	const [amount, setAmount] = useState<number | undefined>(0);
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
								const floatValue = parseFloat(inputValue);
								const roundedValue = Math.round(floatValue * 10 ** dec);

								if (!isNaN(roundedValue)) {
									setAmount(roundedValue);
								}
							}}
						/>
						<label htmlFor={`${props.asset}-input`} className="md:text-2xl text-lg text-neutral-400">
							{props.asset}
						</label>
					</div>
					<div className="grid grid-cols-2 grid-rows-1 gap-4">
						<Button
							type="button"
							size="lg"
							style="solid"
							onClick={() => {
								deposit?.();
							}}
						>
							📥 Deposit
						</Button>
						<Button type="button" size="lg" style="ghost" onClick={() => withdraw?.()}>
							📤 Withdraw
						</Button>
					</div>
				</div>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">
						{isLoadingBalanceAsset ? "-" : (balanceAsset as number) / 10 ** dec} {props.asset}
					</p>
					<h4 className="md:text-lg text-sm text-neutral-400">Your balance</h4>
				</article>
			</div>
			<div className="md:flex md:flex-col md:gap-6 grid grid-cols-3 grid-rows-1 gap-2 h-fit">
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.apy}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">APY</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.useRate}%</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Utilization rate</h3>
				</article>
				<article className="glass-container flex flex-col md:gap-2 gap-1 rounded-3xl md:p-8 p-4">
					<p className="md:text-4xl text-2xl text-neutral-300">{props.volume.toLocaleString("en-US", {})}</p>
					<h3 className="md:text-lg text-sm text-neutral-400">Total deposit</h3>
				</article>
			</div>
		</div>
	);
}

export default LiquidityCard;
