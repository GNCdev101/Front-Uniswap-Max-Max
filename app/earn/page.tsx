// "use client";

import React from "react";
import LiquidityCard from "../../components/LiquidityCard";
import { networkConfig } from "../../helper-config.js";

function earnPage() {
	return (
		<div className="flex flex-row justify-center">
			{networkConfig[1].pools.map((pool, index) => (
				<LiquidityCard
					key={index}
					asset={pool.name}
					address={pool.address}
					apy={parseFloat(pool.apy)}
					volume={parseFloat(pool.tvl)}
					useRate={20}
				/>
			))}
		</div>
	);
}

export default earnPage;
