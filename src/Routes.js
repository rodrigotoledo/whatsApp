/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/login';
import FormCadastro from './components/cadastro';

export default props => (
  <Router>
		<Stack key="root">
			<Scene key='FormLogin' component={FormLogin} title='Login' hideNavBar={true} />
			<Scene key='FormCadastro' component={FormCadastro} title='Cadastro' />
		</Stack>
	</Router>
);