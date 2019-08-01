import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  async handleClick() {
    const results = await this.search(this.state.value);

    this.props.handleSearch(results.results);
  }

  async handlePress(e) {
    if (e.key == "Enter") {
      const results = await this.search(this.state.value);

      this.props.handleSearch(results.results);
    }
  }

  async search(value) {
    const result = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${
        this.state.value
      }&limit=4`
    );

    return await result.json();
  }

  render() {
    return (
      <div className="autocomplete-container">
        <input
          type="text"
          className="autocomplete-input"
          placeholder="Buscar productos, marcas y más..."
          onChange={e => this.handleChange(e)}
          onKeyPress={e => {
            this.handlePress(e);
          }}
        />
        <div onClick={() => this.handleClick()}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    );
  }
}

export default Autocomplete;
