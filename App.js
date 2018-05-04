import React, { Component } from 'react'
import ContactList from './src/ContactList'
import ContactView from './src/ContactView'
import ContactForm from './src/ContactForm'
import { StackNavigator } from 'react-navigation'


const AppStack =  StackNavigator(
  {
    ContactList: { screen: ContactList },
    ContactView: { screen: ContactView },
    ContactForm: { screen: ContactForm }
  }, 
  { initialRouteName: 'ContactList' }
)

export default class App extends Component {
  render () {
    return (
      <AppStack/>
    )
  }
}
