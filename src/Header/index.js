import React from "react";
import Autocomplete from "../Autocomplete";
import "./style.css";

class Header extends React.Component {
  handleSearch(results) {
    this.props.handleCallback(results);
  }

  render() {
    return (
      <header>
        <div className="logo">
          <img src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png" />
        </div>
        <Autocomplete handleSearch={results => this.handleSearch(results)} />
      </header>
    );
  }
}

export default Header;
