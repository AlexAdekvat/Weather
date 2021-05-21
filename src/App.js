import React from "react"
import Form from './components/form';
import Info from './components/info';
import Weather from "./components/weather";

const API_KEY = "45a1804cf811593a6b8ab223c862ac99";



class App extends React.Component {

  state = {
    temp: null,
    city: null,
    country: null,
    sunrise: null,
    sunset: null,
    pressure: null,
    error: null
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;


    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      console.log(data);


      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset)
      const sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunsetDate,
        pressure: data.main.pressure,
        error: ""
      })
    } else {
      this.setState({
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        pressure: null,
        error: "Введите город"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form weather={this.gettingWeather} />
        <Info />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          pressure={this.state.pressure}
          error={this.state.error}

        />
      </div>
    );
  }
}

export default App;
