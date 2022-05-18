import React from "react";
import "./Styles.css";
import { Characters } from "../models/Characters";
import Card from "./Card";

const WomanScreen = () => {
  const womans = Characters.filter((character) => character.type === "m");

  return (
    <div className="container mt-3">
      <h1>Female Characters</h1>
      <div className="card-container">
        <div className="row card-style">
          {womans.map((woman) => {
            return <Card key={woman.id} {...woman} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WomanScreen;
