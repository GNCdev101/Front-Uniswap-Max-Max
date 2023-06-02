import React from "react";
import Image from "next/image";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import { marketABI } from "../abi/market.abi.json";
import { liquidityPoolABI } from "../abi/liquidityPool.abi.json";
import { useEffect, useState } from "react";

interface LiquidityCardProps {
	asset: string;
	address: string;
	apy: number;
	volume: number;
	useRate: number;
}

function LiquidityCard(props: LiquidityCardProps) {
	return (
		<div className="flex flex-col w-80 h-80 bg-red-400 shadow-xl m-5">
			<div className="items-center text-center">
				<h2 className="text-lg">{props.asset} Liquidity Pool</h2>
				<figure className="px-10 pt-10">
					{/* <Image
            src={`/public/ETH.svg`}
            width={100}
            height={100}
            alt="ETH logo"
          /> */}
				</figure>

				<div className="">
					<div className="">{props.apy}% APY</div>
					<div className="">Utilization rate at {props.useRate}%</div>
					<div className="">
						Total Deposited {props.volume} {props.asset}
					</div>
				</div>
				<div className="">
					<label className="">
						<input type="text" placeholder="0.01" className="input input-bordered" />
						<span>{props.asset}</span>
					</label>
				</div>
				<div className="mt-3">
					<button className="mr-4 bg-slate-600">Deposit</button>
					<button className=" ml-4 bg-slate-600">Withdraw</button>
				</div>
				<div className="">Your deposit : 0 {props.asset}</div>
			</div>
		</div>
	);
}

export default LiquidityCard;
