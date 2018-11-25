import Link from "next/link";

import Layout from "../components/Layout";

const PostLink = ({ title, slug }) => (
	<li>
		<Link href={`/post?title=${title}`} as={`/${slug}`}>
			<a>{title}</a>
		</Link>
	</li>
);

export default function blog() {
	return (
		<Layout title="My Blog">
			<ul>
				<PostLink slug="react-post" title="React Post" />
				<PostLink slug="angular-post" title="Angular Post" />
				<PostLink slug="vue-post" title="Vue Post" />
			</ul>
		</Layout>
	);
}
