import React, { Component } from "react";
import Header from "./components/header";
import MainContent from "./components/main-content";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="site-content">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
