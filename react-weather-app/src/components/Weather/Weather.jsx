import React, {Component} from "react";
import styles from "./Weather.module.scss";
import WeatherCard from "./WeatherCard/WeatherCard";

export default class Weather extends Component {
    state = {
        cities: {
            london: "2643744",
            bristol: "4749005",
            rome: "4219762"
        }
    }
    render(){
        return(
           <section className={styles.weathercards} >
               <WeatherCard city={this.state.cities.london} />
               <WeatherCard city={this.state.cities.bristol} />
               <WeatherCard city={this.state.cities.rome}/>
           </section>
        );
    }
}