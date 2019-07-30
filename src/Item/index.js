import React from "react";
import "./style.css";

class Item extends React.Component {
  render() {
    return (
      <div className="item-container">
        <div className="image-container">
          <img src={this.props.data.thumbnail} />
        </div>
        <div className="price-container">
          <span>$ {this.props.data.price}</span>
        </div>
        <div className="title-container">
          <span>{this.props.data.title}</span>
        </div>
      </div>
    );
  }
}

export default Item;
