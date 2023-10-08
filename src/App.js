import React from "react";
import "./App.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  let list = ['orange', 'apple', 'mango'];
  let list2 = ['orangeq', 'apple', 'mango'];

  return (
    <>
      <Header />
      <Content content={list} />
      <Content content={list2} />
      <Footer />
    </>
  );
}

export default App;

