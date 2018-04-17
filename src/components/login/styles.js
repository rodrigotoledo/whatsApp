import {StyleSheet} from 'react-native';
import {colors, metrics} from 'styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: metrics.baseMargin,
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	main:{
		flex: 1,
	},

	footer: {
		flex: 1,
	},

	title: {
		fontSize : 25,
		justifyContent : 'center',
		alignSelf : 'center'
	},

	input: {
		fontSize : metrics.basePadding,
		height : metrics.baseHeight,
		borderRadius: metrics.baseRadius,
		paddingHorizontal: metrics.basePadding,
		textAlignVertical: 'bottom'
	},

	button: {
		backgroundColor: colors.backgroundButton,
		alignItems: 'center',
		width: '100%',
		padding: metrics.basePadding,
		borderRadius: metrics.baseRadius,
	},

	buttonText:{
		color: colors.white
	},

	link:{
		fontSize : metrics.basePadding,
		alignSelf : 'center',
		fontSize : 14
	},

	footerLink: {
		color: colors.white,
		fontSize: 14,
		fontWeight: 'bold'
	}
});

export default styles;
