import React from "react";
import PokemonList from "../components/PokemonList";
import TypeMenu from "../components/TypeMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <TypeMenu />
      <PokemonList />
      <Cart />
    </div>
  );
};

export default Home;
