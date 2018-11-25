import Link from "next/link";

export default function About() {
	return (
		<div>
			<h1>About</h1>
			<Link href="/">
				<a>Go to home</a>
			</Link>
			<p>A javascript programmer</p>
			<img src="/static/JavaScript-logo.png" alt="javascript" height="200px" />
		</div>
	);
}
