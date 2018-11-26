import React from "react";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../store/reducer'


const makeStore = (initialState ,options)=>{
    return createStore(reducer, initialState ,composeWithDevTools(applyMiddleware(thunk)))
}
class MainApp extends App {
    static async getInitialProps({Component, ctx}) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MainApp)
