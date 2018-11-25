import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
	return (
		<Layout title="Home">
			<h1>Home</h1>
			<Link href="/about">
				<a>Go to about</a>
			</Link>
			<p>Welcome to the homepage</p>
		</Layout>
	);
}
