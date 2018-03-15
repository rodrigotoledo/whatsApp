import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

const whatsApp = props => (
	<App />
);

AppRegistry.registerComponent('whatsApp', () => whatsApp);
