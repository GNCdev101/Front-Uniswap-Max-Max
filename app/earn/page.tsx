"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { networkConfig } from "../../helper-config.js";
import { useNetwork } from "wagmi";

function EarnPage() {
	const router = useRouter();
	const [selectedPool, setSelectedPool] = useState("");
	const { chain } = useNetwork();

	if (!chain || !networkConfig[chain.id]) {
		return <div>Unsupported network</div>;
	}

	const handlePoolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const poolName = event.target.value;
		setSelectedPool(poolName);
		if (poolName) {
			router.push(`/earn/${poolName.toLowerCase()}`);
		}
	};

	return (
		<main className="flex flex-row justify-center">
			<div className="glass-container max-w-lg flex flex-col justify-center gap-4 rounded-3xl md:p-8 p-4">
				<p className="text-neutral-300 text-lg text-center">
					Please select a token pool to get started. You are one deposit away from eternal wealth 🤑
				</p>
				<select
					value={selectedPool}
					onChange={handlePoolChange}
					className="glass-input glass-input-large text-neutral-300"
				>
					<option value="" disabled>
						Choose a token
					</option>
					{networkConfig[chain.id].pools.map((pool) => (
						<option key={pool.name} value={pool.name}>
							{pool.name}
						</option>
					))}
				</select>
			</div>
		</main>
	);
}

export default EarnPage;
