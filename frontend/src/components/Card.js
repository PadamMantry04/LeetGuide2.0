import React, { Component } from "react";
// import { Card } from "react-bootstrap";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card m-2" style={{ width: "18rem", maxHeight: "360px" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some random text.</p>
            <div className="container d-flex">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <p className="m-1 fs-5">Total Price</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
