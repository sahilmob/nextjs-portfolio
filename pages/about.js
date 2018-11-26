import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Layout from "../components/Layout";
import Error from "./_error";
import {getUserData} from '../store/actions'

class about extends Component {
	static async getInitialProps({store, isServer, pathname, query}) {
		await store.dispatch(getUserData());
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
		userData: state.userData,
		statusCode: state.statusCode
	}
}


export default connect(mapStateToPorps)(about);