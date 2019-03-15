import React from "react";

const StockCard = ({ background, json }) => {
  let colStyles = {
    height: "24px"
  };
  return (
    <div
      className="card m-2"
      style={{ width: "12rem", backgroundColor: background }}
    >
      <div className="card-body" style={{ textAlign: "center" }}>
        <p
          className="card-title"
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        >
          {json.name}
        </p>
        <div className="row">
          <div className="col-sm" style={colStyles}>
            <p>{json.symbol}</p>
          </div>
          <div className="col-sm" style={colStyles}>
            <p>${json.price}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={colStyles}>
            <p>${json.day_change}</p>
          </div>
          <div className="col-sm" style={colStyles}>
            <p>{json.change_pct}%</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={colStyles}>
            <p>High</p>
          </div>
          <div className="col-sm" style={colStyles}>
            <p>${json.day_high}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={colStyles}>
            <p>Low</p>
          </div>
          <div className="col-sm" style={colStyles}>
            <p>${json.day_low}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
