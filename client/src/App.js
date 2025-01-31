import React, { Component } from "react";
import Info from "./Containers/Info/Info";
import WebScraper from "./Containers/web-scraper/web-scraper";
import Pairs from "./Containers/Trading-strats/Pairs";
import "./App.css";
import LoginButton from "./components/LoginButton";

class App extends Component {
  render() {
    return (
      <div>
        <Pairs />
        <LoginButton />
        <WebScraper />
      </div>
    );
  }
}

export default App;
