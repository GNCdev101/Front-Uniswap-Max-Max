// react component button with prop for size
export default function ConnectButton({ size, style }: { size: "xs" | "sm" | "md" | "lg", style: "solid" | "ghost" }) {
	return (
		<button
			className={`py-2 px-4 transition-all ${style === "solid" ? "box-container-solid hover:bg-transparent hover:text-neutral-300" : "box-container hover:border-neutral-400 hover:text-neutral-400"} hover:shadow-none ${size === "sm" ? "text-sm" : size === "md" ? "text-md" : size === "xs" ? "text-xs" : "text-lg"}`}
			style={{ fontStretch: "expanded" }}
		>
			Connect Wallet
		</button>
	);
}
