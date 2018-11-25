import Link from "next/link";

export default function Index() {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/about">
				<a>Go to about</a>
			</Link>
			<p>Welcome to the homepage</p>
		</div>
	);
}
