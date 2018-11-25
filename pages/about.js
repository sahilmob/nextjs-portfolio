import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Error from "./_error";
export default class about extends Component {
	static async getInitialProps() {
		const res = await fetch("http://api.github.com/users/sahilmob");
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		return { user: data, statusCode };
	}

	render() {
		const { user, statusCode } = this.props;
		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}
		return (
			<Layout title="About">
				<p>{user.name}</p>
				<img src={user.avatar_url} alt="Me" height="200px" />
			</Layout>
		);
	}
}
