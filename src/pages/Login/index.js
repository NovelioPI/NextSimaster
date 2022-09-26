import React, { Component } from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"
import background from '../../assets/images/login-bg.png'
import simaster from '../../assets/images/logo-simaster.png'

export default class Login extends Component {
	render() {
		return (
			<View style={this.styles.container}>
				<View style={this.styles.backgroundContainer}>
					<Image source={background} />
				</View>
				<View>
					<Image source={simaster} style={this.styles.logo} />
				</View>
			</View>
		)
	}

	styles = StyleSheet.create({
		backgroundContainer: {
			position: 'absolute',
			flex: 1,
		},
		container: {
			backgroundColor: '#ffffff',
			flex: 1,
			alignItems: 'center',
		},
		logo: {
			width: Dimensions.get('screen').width*0.7,
			height: Dimensions.get('screen').width*0.7,
			marginTop: Dimensions.get('screen').height*0.08,
			alignItems: 'center',
		}
	})
}