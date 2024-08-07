import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Common/Header/Header";
import MainRouter from "./router";
import Footer from "./Common/footer/footer";
function App() {
  return (
    <div>
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
