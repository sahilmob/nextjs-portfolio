import Link from "next/link";

export default function Layout({ children, title }) {
	return (
		<div>
			<header>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/hireme">
					<a>Hire Me</a>
				</Link>
			</header>
			<h1>{title}</h1>
			{children}
			<footer>footer</footer>
		</div>
	);
}
