import React from "react";
import "./App.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  let list = ['orange', 'apple', 'mango'];

  return (
    <>
      <Header />
      <Content content={list} />
      <Footer />
    </>
  );
}

export default App;

