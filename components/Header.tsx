import Link from "next/link";
import ConnectButton from "./ConnectButton";

export default function Header() {
	return (
		<header className="mt-8 fixed z-10 fit-content flex flex-row justify-between items-center px-6 py-4 rounded-full text-neutral-300">
			<div>
				<Link href="/">
					<h1 className="font-bold text-lg">Uniswap Max</h1>
				</Link>
			</div>
			<nav>
				<ul className="flex flex-row gap-12 text-sm tracking-wider">
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/earn">Earn</Link>
					</li>
					<li>
						<Link href="/trade">Trade</Link>
					</li>
				</ul>
			</nav>
			<div>
				<ConnectButton />
			</div>
		</header>
	);
}
