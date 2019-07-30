import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Autocomplete extends React.Component {
  render() {
    return (
      <div className="autocomplete-container">
        <input
          type="text"
          className="autocomplete-input"
          placeholder="Buscar productos, marcas y más..."
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    );
  }
}

export default Autocomplete;
