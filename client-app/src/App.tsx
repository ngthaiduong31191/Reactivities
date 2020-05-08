import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Icon, List } from 'semantic-ui-react'
import { cars } from './demo';
import CarItem from './CarItem';
import axios from 'axios';
class App extends Component {
  state = {
    values: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/WeatherForecast')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
  }
  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>React Activities</Header.Content>
        </Header>
        <List>
          {
            this.state.values.map((value: any) => (
              <List.Item key={value.id}> {value.name}</List.Item>
            ))
          }
        </List>
      </div>
    );
  }
}

export default App;
