import React, { Component } from 'react'
import {
  Container,
  Body,
  Header,
  Content,
  List,
  ListItem,
  Title,
  Text
} from 'native-base'
import { Alert } from 'react-native'
export default class Contact extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          name: 'John Cena',
          email: 'john@wwe.com',
          mobile: '09157569421',
          description: 'WWE Champion'
        },
        {
          name: 'Brock Lesnar',
          email: 'brock@wwe.com',
          mobile: '09157569321',
          description: 'F5'
        }
      ]
    }
  }

  // async componentDidMount () {
    // let data = await fetch('http://mosesito.herokuapp.com/api/v1/categories')
    // data = await data.json()
    // this.setState({ data })
  // }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title> Contact List </Title>
          </Body>
        </Header>
        <Content padder>
          <List dataArray={this.state.data}
            renderRow = {item =>
              <ListItem button onPress={_ => Alert.alert(item.name)}>
                <Text>{item.name}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
