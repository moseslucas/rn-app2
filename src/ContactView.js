import React, { Component } from 'react'
import {
  Container,
  Header,
  Body,
  Content,
  Title
} from 'react-native'

export default class ContactView extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title> Contact View </Title>
          </Body>
        </Header>
      </Container>
    )
  }
}
