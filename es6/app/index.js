
// JSX
// Adds XML-like syntax to javascript.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '7a97b7e3f55903f4d9fbbb947ea4dda3';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      city: "Jakarta",
      description: ''
    }
  }

  componentDidMount(){
    this.grabWeather(this.state.city);
  }

  grabWeather(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
    .then(response => response.json())
    .then(json => {
      this.setState({description: json.weather[0].description})
    });
  }

  render(){
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
