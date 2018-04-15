/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from "react-redux";
import { createProvider, createStore } from "redux";
import 'config/ReactotronConfig';

import Routes from "./Routes";
import reducers from "./reducers";

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);