import Link from "next/link";

export default function Button({
	type = "button",
	to,
	size = "md",
	style = "solid",
	onClick,
	children,
	disabled = false,
}: {
	type: "button" | "link" | "a";
	to?: string;
	size: "xs" | "sm" | "md" | "lg";
	style: "solid" | "ghost";
	children: React.ReactNode;
	onClick?: (...args: any[]) => void;
	disabled?: boolean;
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
	} else if (type === "button") {
		return (
			<button
				className={`py-2 px-4 ${
					style === "solid" ? "box-container-solid btn-solid" : "box-container btn-ghost"
				} ${
					size === "sm" ? "text-sm" : size === "md" ? "text-md" : size === "xs" ? "text-xs" : "text-lg"
				} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
				style={{ fontStretch: "expanded" }}
				onClick={onClick}
				disabled={disabled}
			>
				{children}
			</button>
		);
	} else {
		return (
			<a
				href={to || "/"}
				className={`items-center justify-center gap-2 text-neutral-300 py-2 px-4 ${
					style === "solid" ? "box-container-solid btn-solid" : "box-container btn-ghost"
				} ${size === "sm" ? "text-sm" : size === "md" ? "text-md" : size === "xs" ? "text-xs" : "text-lg"}`}
				style={{ fontStretch: "expanded" }}
				target={to?.includes("http") ? "_blank" : ""}
			>
				{children}
			</a>
		);
	}
}
