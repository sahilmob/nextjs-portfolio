import Layout from "../components/Layout";

export default function post(props) {
	return (
		<Layout title={props.url.query.title}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
				placerat tortor. Pellentesque nibh diam, faucibus nec euismod tincidunt,
				dictum vitae turpis. Nam eget leo at ligula aliquet faucibus ac tempor
				enim. Suspendisse porttitor tempor odio eget vestibulum. Aliquam eu
				finibus odio, ac volutpat massa. Praesent luctus risus nec leo malesuada
				dapibus. Suspendisse at diam placerat, bibendum dui rutrum, tristique
				turpis. Pellentesque at est viverra, aliquam nulla in, sodales arcu.
				Mauris vitae tincidunt orci, mollis viverra neque.
			</p>
		</Layout>
	);
}
