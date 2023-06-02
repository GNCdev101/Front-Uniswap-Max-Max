// "use client";

import React from "react";
import { useEffect, useState } from "react";
import LiquidityCard from "../../components/LiquidityCard";
import { networkConfig } from "../../helper-config.js";

function earnPage() {
	return (
		<div className="w-screen" style={{ height: "100lvh" }}>
			<div className="front-page-content flex flex-auto text-white">
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
		</div>
	);
}

export default earnPage;
