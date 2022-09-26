import React, { Component } from "react"
import { View, Image, StyleSheet, Dimensions, Text } from "react-native"
import background from '../../assets/images/login-bg.png'
import simaster from '../../assets/images/logo-simaster.png'

export default class Login extends Component {
	render() {
		return (
			<View style={this.styles.container}>
				<this.loginView />
				<this.loginUser />
			</View>
		)
	}

	loginView = () => {
		return (
			<View style={this.styles.overlay}>
				<View style={this.styles.backgroundContainer}>
					<Image source={background} />
				</View>
				<View style={this.styles.logoContainer}>
					<Image source={simaster} style={this.styles.logo} />
				</View>
				<View style={this.styles.watermarkContainer}>
					<Text>2022. Simaster Reserved by UGM</Text>
				</View>
			</View>
		)
	}

	loginUser = () => {
		return (
			<View style={this.styles.overlay}>
				
			</View>
		)
	}

	styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		backgroundContainer: {
			position: 'absolute',
		},
		logoContainer: {
			alignItems:'center',
		},
		logo: {
			width: Dimensions.get('screen').width*0.7,
			height: undefined,
			aspectRatio: 1,
			marginTop: Dimensions.get('screen').height*0.08,
		},
		watermarkContainer: {
			flex:1,
			justifyContent:'flex-end',
			alignItems:'center',
			bottom: 14,
		},
		overlay: {
			position: 'absolute',
			left: 0,
			top: 0,
			width: '100%',
			height: '100%'
		}
	})
}