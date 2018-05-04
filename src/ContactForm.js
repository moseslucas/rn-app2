import React, { Component } from 'react'
import {
  Container,
  Body,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from 'native-base'

export default class ContactForm extends Component {
  constructor () {
    super()
    this.handleSave = this.handleSave.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      name: '',
      email: '',
      mobile: '',
      description: ''
    }
  }

  handleInput(name, value) {
    this.setState({ [name]: value },_=> console.log(this.state))
  }

  handleSave () {
    const { save } = this.props.navigation.state.params
    save(this.state)
    this.props.navigation.goBack()
  }

  render () {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item regular>
              <Input placeholder='Name' onChangeText={value => this.handleInput('name', value)}/>
            </Item>
            <Item regular>
              <Input placeholder='email' onChangeText={value => this.handleInput('email', value)}/>
            </Item>
            <Item regular>
              <Input placeholder='mobile' keyboardType='numeric' onChangeText={value => this.handleInput('mobile', value)}/>
            </Item>
            <Item regular>
              <Input placeholder='description' onChangeText={value => this.handleInput('description', value)}/>
            </Item>
            <Button full primary onPress={this.handleSave}>
              <Text> Save </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
