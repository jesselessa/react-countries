// React
import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card w-50">
          <img src={this.props.flag} className="card-img-top" alt="Flag" />
          <div className="card-body">
            <h5 className="card-title">Country: {this.props.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Capital: {this.props.capital}</li>
            <li className="list-group-item">Region: {this.props.region}</li>
            <li className="list-group-item">
              Population: {this.props.population}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Card;
