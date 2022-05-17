import React from "react";

import { Container } from "./styles";

const Countrys = ({ image, name, population, region, capital }) => {
  return (
    <Container>
      <img alt="Bandeira do país" className="flag" src={image} />
      <div className="text-container">
        <h1>{name}</h1>
        <p>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Container>
  );
};

export default Countrys;
