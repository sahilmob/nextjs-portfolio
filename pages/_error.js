import Layout from "../components/Layout";

export default function _error({ statusCode }) {
	return (
		<Layout title="Error">
			{statusCode
				? `Could not load your user data: status code ${statusCode}`
				: `Couldn't get that page, sorry!`}
		</Layout>
	);
}
