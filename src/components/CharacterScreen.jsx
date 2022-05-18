import React from "react";
import "./Styles.css";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { characterId } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === characterId
  );

  const img = `/assets/${type}-${characterId}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container row">
      <div className="col-12 col-md-6 card-style">
        <img
          className="img-thumbnail mt-5"
          style={{
            width: 250,
          }}
          src={img}
          alt={characterId}
        />
      </div>
      <div className="col-12 col-md-6 mt-5 text-center">
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          onClick={handleBack}
          className="btn btn-outline-warning btn-block"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
