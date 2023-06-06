import React from "react";
import TradingViewWidget from "@/components/TradingViewWidget";
import PositionCard from "@/components/PositionCard";
import OpenPostionForm from "@/components/OpenPostionForm";
import Footer from "@/components/Footer";

const mockId = [1, 2, 3]; // Beirao will change this to a list of pool ids

function tradePage() {
	return (
		<div className="flex flex-row gap-8">
			<div>
				<TradingViewWidget />
				<OpenPostionForm />
			</div>

			<div>
				<div className="mt-12">Your positions:</div>
				<div>
					{mockId.map((pool, index) => (
						<PositionCard key={index} posId={pool} />
					))}
				</div>
			</div>
		</div>
	);
}

export default tradePage;
