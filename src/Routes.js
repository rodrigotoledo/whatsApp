/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
  <Router>
		<Stack key="root">
			<Scene key='FormLogin' component={FormLogin} title='Login' />
			<Scene key='FormCadastro' component={FormCadastro} title='Cadastro' />
		</Stack>
	</Router>
);