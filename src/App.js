// React
import React from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {
  // States
  constructor() {
    super();

    this.state = {
      loading: true,
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
    this.getCountry = this.getCountry.bind(this);
    this.isLoaded = this.isLoaded.bind(this);
  }
  // Function isLoaded
  isLoaded() {
    this.setState({ loading: false });
  }

  // Using API REST Countries
  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          population: res[0].population,
          region: res[0].region,
          flag: res[0].flags.png,
        });
      })
      .then(this.isLoaded);
  }

  // Function getCountry from API REST Countries
  getCountry(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          population: res[0].population,
          region: res[0].region,
          flag: res[0].flags.png,
        });
      })
      .then(this.isLoaded);
  }

  // Display on screen
  render() {
    console.log(this.state);
    return (
      <>
        <div className="container-fluid d-flex flex-column align-items-center col-8 p-3">
          <h1 className="p-2">Country selector</h1>

          <div className="p-2">
            {/* Buttons */}
            <Button
              isSelected={this.state.name === "france"}
              onClick={this.getCountry}
            >
              France
            </Button>

            <Button
              isSelected={this.state.name === "brazil"}
              onClick={this.getCountry}
            >
              Brazil
            </Button>

            <Button
              isSelected={this.state.name === "croatia"}
              onClick={this.getCountry}
            >
              Croatia
            </Button>
          </div>

          {/* Card */}
          <Card
            flag={this.state.flag}
            name={this.state.name}
            capital={this.state.capital}
            population={this.state.population}
            region={this.state.region}
          />
          {/* </> */}
          {/* )} */}
        </div>
      </>
    );
  }
}

export default App;
