import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Product from "./components/Product";
import { productData, productDataTwo } from "./components/Product/data";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Product heading="Choose your favorite place" data={productData} />
      <Features />
      <Product heading="Our Packages" data={productDataTwo} />
      <Footer />
    </Router>
  );
}
