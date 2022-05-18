import React from "react";
import { useNavigate, useParams } from "react-router";

import { Container, Button, Details, Info, ItemGroup, Item } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Country({ countries }) {
  const navigate = useNavigate();
  const params = useParams();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.name) {
      name = country.name;
      flagImg = country.flags.svg;
      nativeName = country.nativeName;
      capital = country.capital;
      population = country.population;
      topLevelDomain = country.topLevelDomain[0];
      region = country.region;
      subregion = country.subregion;

      country.currencies.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages.forEach((language) => {
        languages.push(language.name);
      });
    }
  });
  console.log(countries);

  const goBack = () => {
    navigate("/");
  };
  return (
    <Container>
      <Button onClick={goBack}>
        <AiOutlineArrowLeft className="icon" /> Go Back
      </Button>

      <Details>
        <img src={flagImg} alt="Flag image" />
        <Info>
          <h1>{name}</h1>
          <ItemGroup>
            <Item>
              Native name: <span>{nativeName}</span>
            </Item>
            <Item>
              Capital: <span>{capital}</span>
            </Item>
          </ItemGroup>
          <ItemGroup>
            <Item>
              Population: <span>{population}</span>
            </Item>
            <Item>
              Top-level Domain: <span>{topLevelDomain}</span>
            </Item>
          </ItemGroup>
          <ItemGroup>
            <Item>
              Region: <span>{region}</span>
            </Item>
            <Item>
              Currencies:{" "}
              {currencies.map((currency) => {
                if (currencies.indexOf(currency) !== currencies.length - 1) {
                  return <span>{currency}, </span>;
                } else {
                  return <span>{currency}</span>;
                }
              })}
            </Item>
          </ItemGroup>
          <ItemGroup>
            <Item>
              Sub region: <span>{subregion}</span>
            </Item>
            <Item>
              Languages:{" "}
              {languages.map((language) => {
                if (languages.indexOf(language) !== languages.length - 1) {
                  return <span>{language}, </span>;
                } else {
                  return <span>{language}</span>;
                }
              })}
            </Item>
          </ItemGroup>
        </Info>
      </Details>
    </Container>
  );
}

export default Country;
