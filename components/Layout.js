import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import classes from '../styles.css'

Router.onRouteChangeStart = url => {
	console.log(url);
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function Layout({ children, title }) {
	return (
		<div className={classes.root}>
			<Head>
				<title>Next Portfolio</title>
			</Head>
			<header className={classes.header}>
				<Link href="/">
					<a className={classes.link}>Home</a>
				</Link>
				<Link href="/about">
					<a className={classes.link}>About</a>
				</Link>
				<Link href="/hireme">
					<a className={classes.link}>Hire Me</a>
				</Link>
				<Link href="/blog">
					<a className={classes.link}>Blog</a>
				</Link>
			</header>
			<h1>{title}</h1>
			{children}
			<footer className={classes.footer}>&copy; {new Date().getFullYear()}</footer>
			<style jsx global>
				{`
					body {
						margin: 0;
						font-size: 110%;
						background: #f0f0f0;
					}
				`}
			</style>
		</div>
	);
}
