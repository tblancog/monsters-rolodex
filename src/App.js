import React from "react";
import CardList from "./components/CardList/CardList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(searchField.toLowerCase()) ||
        email.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Enter search"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
