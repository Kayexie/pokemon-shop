import React from "react";
import PokemonList from "../components/PokemonList";
import TypeMenu from "../components/TypeMenu";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <TypeMenu />
      <PokemonList />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
