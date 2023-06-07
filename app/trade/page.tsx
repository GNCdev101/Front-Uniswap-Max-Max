import React from "react";
import TradingViewWidget from "@/components/TradingViewWidget";
import PositionCard from "@/components/PositionCard";
import OpenPostionForm from "@/components/OpenPostionForm";

const mockId = [1, 2, 3]; // Beirao will change this to a list of pool ids

export default function tradePage() {
	return (
		<>
			<section className="fit-content flex justify-center h-full">
				<div className="md:mt-32 mt-24 md:grid md:grid-cols-[1fr,0.5fr] md:grid-rows-1 md:justify-between flex justify-center gap-8 w-full">
					<TradingViewWidget />
					<OpenPostionForm />
				</div>
			</section>
			<section className="fit-content flex justify-center h-full">
				<div className="md:mt-32 mt-24 flex flex-col gap-12 w-full">
					<div className="flex">
						<h3 className="text-4xl text-neutral-300" style={{ fontStretch: "expanded" }}>Your positions</h3>
					</div>
					<div className="flex flex-col gap-4">
						{mockId.map((pool, index) => (
							<PositionCard key={index} posId={pool} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
