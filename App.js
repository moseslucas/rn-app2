import React, { Component } from 'react'
import ContactList from './src/ContactList'
import ContactView from './src/ContactView'
import ContactForm from './src/ContactForm'
import { StackNavigator } from 'react-navigation'
import Expo from 'expo'


const AppStack =  StackNavigator(
  {
    ContactList: { screen: ContactList },
    ContactView: { screen: ContactView },
    ContactForm: { screen: ContactForm }
  }, 
  { initialRouteName: 'ContactList' }
)

export default class App extends Component {
  constructor () {
    super()
    this.state = { loading: true }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    })
    this.setState({ loading: false })
  }
  render () {
    if ( !this.state.loading )
      return (
        <AppStack/>
      )
    else
      return null
  }
}
