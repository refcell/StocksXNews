import React, { Component } from "react";
import axios from "axios";
import StockCard from "./StockCard";

let api_token = "SN5T9MGrh62aBDnrpgEaGCNPiXKqXQvt0HA40BULuKujVURLYLQzFJKmq6wQ";

class Stocks extends Component {
  state = {
    stocks: ["AAPL", "AMZN", "TSLA", "IRBT", "CMG"],
    stockData: []
  };

  componentDidMount() {
    const { stocks } = this.state;
    axios
      .get(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${stocks[0]},${
          stocks[1]
        },${stocks[2]},${stocks[3]},${stocks[4]}&api_token=${api_token}`
      )
      .then(res => {
        const stockData = res.data.data;
        console.log("Stocks API Status: " + res.status);
        this.setState({ stockData });
      });
  }

  render() {
    const stockData = Array.from(this.state.stockData);
    return (
      <div className="col-sm" style={{ width: "18rem" }}>
        {stockData.map(stock => {
          return <StockCard key={stock.name} json={stock} />;
        })}
      </div>
    );
  }
}

export default Stocks;
