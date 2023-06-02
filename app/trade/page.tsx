import React from "react";
import TradingViewWidget from "@/components/TradingViewWidget";
import PositionCard from "@/components/PositionCard";
import OpenPostionForm from "@/components/OpenPostionForm";

const mockId = [1, 2, 3]; // Beirao will change this to a list of pool ids

function tradePage() {
	return (
		<div className="w-screen">
			<div className="front-page-content text-white">
				<TradingViewWidget />
				<OpenPostionForm />

				<div className="mt-12">Your positions:</div>
				{mockId.map((pool, index) => (
					<PositionCard key={index} posId={pool} />
				))}
			</div>
		</div>
	);
}

export default tradePage;
