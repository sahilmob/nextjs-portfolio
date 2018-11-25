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
		const { user } = this.props;
		return (
			<Layout title="About">
				<p>{user.name}</p>
				<img src={user.avatar_url} alt="Me" height="200px" />
			</Layout>
		);
	}
}
