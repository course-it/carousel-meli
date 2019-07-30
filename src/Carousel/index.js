import React from "react";
import "./style.css";
import Item from "../Item";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel-main-container">
        <h2>{this.props.title}</h2>
        <div className="carousel-container">
          {this.props.products.length > 0 ? (
            <React.Fragment>
              {this.props.products.map((item, key) => {
                return <Item data={item} key={key} />;
              })}
            </React.Fragment>
          ) : (
            <p>Todavia no hay resultados para este carousel</p>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
