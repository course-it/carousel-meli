import React from "react";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchResults: []
    };
  }

  async componentDidMount() {
    const result = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4"
    );
    const resultJson = await result.json();

    this.setState({
      result: resultJson.results
    });
  }

  handleCallback(results) {
    this.setState({
      searchResults: results
    });
  }

  render() {
    return (
      <div className="App">
        <Header handleCallback={results => this.handleCallback(results)} />
        <Carousel title="Video Juegos" products={this.state.result} />
        <Carousel title="Busqueda" products={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
