import Link from "next/link";

import Layout from "../components/Layout";

const PostLink = ({ title }) => (
	<li>
		<Link href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);

export default function blog() {
	return (
		<Layout title="My Blog">
			<ul>
				<PostLink title="react" />
				<PostLink title="angular" />
				<PostLink title="vue" />
			</ul>
		</Layout>
	);
}
