import React, { Component } from 'react'
import {
  Container,
  Body,
  Header,
  Right,
  Left,
  Button,
  Content,
  List,
  ListItem,
  Title,
  Text
} from 'native-base'
import { Alert } from 'react-native'

export default class ContactList extends Component {
  static navigationOptions = {
    header: null
  }

  constructor () {
    super()
    this.save = this.save.bind(this)
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

  save (newContact) {
    const { data } = this.state
    newData = data.concat(newContact)
    this.setState({ data: newData })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title> Contact List </Title>
          </Body>
          <Right>
            <Button transparent onPress={
              _ => this.props.navigation.navigate('ContactForm', { save: this.save })
            }>
              <Text> New </Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <List>
            {this.state.data.map( (item, i) => {
              return (
                <ListItem button key={i} onPress={
                  _ => {
                    this.props.navigation.navigate('ContactView', {contact: item})
                  }
                }>
                  <Text>{item.name}</Text>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
