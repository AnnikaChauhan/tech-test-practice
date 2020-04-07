import React, {Component} from "react";
import styles from "./WeatherCard.module.scss";

export default class WeatherCard extends Component {
    state = {
        weatherData: ""
    }

    convertKelvinToCelsius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(2);
        return celsius;
    }

    componentWillMount(){
        let cityID = this.props.city;
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
        fetch(weatherURL)
            .then(response => response.json())
            .then(weatherData => {
                this.setState({ weatherData })
            })
            .catch(error => console.log(error));

    }

    render(){
        return(
            <section className={styles.card}>
                {
                    !this.state.weatherData
                        ? <p>Not working</p>
                        :   <article>
                                <h1>Weather for: {this.state.weatherData.name} </h1>
                                <p>Current Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp)}°C</p>
                                <p>Humidity: {this.state.weatherData.main.humidity}% </p>
                                <p>Min Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp_min)}°C</p>
                                <p>Max Temperature: {this.convertKelvinToCelsius(this.state.weatherData.main.temp_max)}°C</p>
                            </article>
                }
            </section>
        );
    }
}