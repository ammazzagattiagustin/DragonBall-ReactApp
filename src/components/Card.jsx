import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Card = ({ name, description, type, id }) => {
  const img = `/assets/${type}-${id}.png`;

  return (
    <div
      className="card m-3 col-12 col-md-4 text-center"
      style={{
        width: 250,
      }}
    >
      <img className="card-img-top" loading="lazy" src={img} alt={id} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <Link className="card-link" to={`/character/${id}`}>
            Details...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
