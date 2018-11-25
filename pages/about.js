import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
export default class about extends Component {
	static async getInitialProps() {
		const res = await fetch("http://api.github.com/users/sahilmob");
		const data = await res.json();
		return { user: data };
	}

	render() {
		return (
			<Layout title="About">
				{JSON.stringify(this.props.user)}
				<p>A javascript programmer</p>
				<img
					src="/static/JavaScript-logo.png"
					alt="javascript"
					height="200px"
				/>
			</Layout>
		);
	}
}
