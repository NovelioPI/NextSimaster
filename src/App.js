import React, { Component } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import Login from './pages/Login'

const App = () => {
  return (
    <Login />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#669ccf'
  }
})

export default App;