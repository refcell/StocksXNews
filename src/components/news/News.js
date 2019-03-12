import React, { Component } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

let config = { Authorization: "c918cca2a23f4b7ea848322a097e4833" };

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us", {
        headers: config
      })
      .then(res => {
        const news = res.data.articles;
        console.log("News api request: " + res.data.status);
        this.setState({ news });
      });
  }

  render() {
    const { news } = this.state;
    return (
      <div className="col-sm" style={{ width: "20rem" }}>
        {news.map(article => {
          return <NewsCard json={article} />;
        })}
      </div>
    );
  }
}

export default News;
