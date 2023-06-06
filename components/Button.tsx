import Link from "next/link";

export default function Button({
	type = "button",
	to,
	size = "md",
	style = "solid",
	onClick,
	children,
}: {
	type: "button" | "link";
	to?: string;
	size: "xs" | "sm" | "md" | "lg";
	style: "solid" | "ghost";
	children: React.ReactNode;
	onClick?: (...args: any[]) => void;
}) {
	if (type === "link") {
		return (
			<Link
				href={to || "/"}
				className={`items-center justify-center text-neutral-300 py-2 px-4 ${
					style === "solid" ? "box-container-solid btn-solid" : "box-container btn-ghost"
				} ${size === "sm" ? "text-sm" : size === "md" ? "text-md" : size === "xs" ? "text-xs" : "text-lg"}`}
				style={{ fontStretch: "expanded" }}
			>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				className={`py-2 px-4 ${
					style === "solid" ? "box-container-solid btn-solid" : "box-container btn-ghost"
				} ${size === "sm" ? "text-sm" : size === "md" ? "text-md" : size === "xs" ? "text-xs" : "text-lg"}`}
				style={{ fontStretch: "expanded" }}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}
}
