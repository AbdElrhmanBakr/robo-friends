import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import {robots} from './Robots';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState((data) => ({ robots: users })));
  }
  // Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
  // ⛔️ `this` is undefined here
  //Bcause it happened in <input> in SearchBox.js, So it refers to nothing
  //define the class method as an arrow function or use the bind method in the classes' constructor method.
  // Use :
  // this.onSearchChange = this.onSearchChange.bind(this);
  // OR
  // onSearchChange = (event) => {

  onSearchChange = (event) => {
    //console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    this.setState({ searchfield: value });
  };

  render() {
    // Replacing this.state.robots and this.state.searchfield with robots and searchfield
    const { robots, searchfield } = this.state;
    const { onSearchChange } = this;

    const filteredRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield);
    });

    if (!robots.length) {
      return (
        <div>
          <h1 className="tc">Loading</h1>
          <h2 className="tc">Please Wait</h2>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          {/*Pure Functions*/}
          <SearchBox searchChange={onSearchChange} />
          {/* <Scroll> */}
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default App;
