import React, { Component } from 'react'
import {
  Container,
  Content,
  Title,
  Text,
  Card,
  CardItem
} from 'native-base'

export default class ContactView extends Component {
  render() {
    const { contact } = this.props.navigation.state.params
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered header>
              <Text> {contact.name} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.email} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.mobile} </Text>
            </CardItem>
            <CardItem bordered>
              <Text> {contact.description} </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
