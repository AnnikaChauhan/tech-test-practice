import React, {Component} from 'react';
import './App.scss';
import Weather from "../../components/Weather"

export default class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>Weather App</h1>
        <Weather />
    </div>
    );
  }
}