export default function Layout({ children, title }) {
	return (
		<div>
			<header>header</header>
			<h1>{title}</h1>
			{children}
			<footer>footer</footer>
		</div>
	);
}
