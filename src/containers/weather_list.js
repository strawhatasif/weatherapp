import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        //return temps in Fahrenheit - so first converting from 
        //Kelvin to Celsius and then from Celsius to Fahrenheit
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273) * (9/5) + 32);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //ES6 to simplify variables returned - in this case it finds lat and lon
        //in the cityData.city.coord object and creates 2 variables
        const { lat, lon } = cityData.city.coord;
        
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" units="F"/></td>
                <td><Chart data={pressures} color="blue" units="hPa"/></td>
                <td><Chart data={humidities} color="green" units="%"/></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

//ES6 approach - argument { weather } in mapStateToProps is 
//the equivalent of declaring const weather = state.weather in the function
function mapStateToProps({ weather }) {
    return { weather: weather }; // {weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);