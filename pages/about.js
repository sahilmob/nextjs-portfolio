import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Error from "./_error";

class about extends Component {
	static async getInitialProps({store, isServer, pathname, query}) {
		const res = await fetch("http://api.github.com/users/sahilmob");
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		store.dispatch({type: "SET_USER_DATA", userData: data, statusCode})
	}


	render() {
		const { userData, statusCode } = this.props;
		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}
		return (
			<Layout title="About">
				{userData ? 
				<>
				<p>{userData.name}</p>
				<img src={userData.avatar_url} alt="Me" height="200px" />
				</>
				:
				"Loading"
			}
			</Layout>
		);
	}
}

const mapStateToPorps = state =>{
	return {
		userData: state.userData
	}
}


export default connect(mapStateToPorps)(about);