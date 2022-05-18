import { Container, Input, InputField, CountrysContainer } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Countrys from "../../components/Countrys";
import { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getInitialData() {
      const response = await fetch("https://restcountries.com/v2/all");

      const data = await response.json();

      console.log(data);
      setCountries(data);
    }

    getInitialData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  return (
    <>
      <Container>
        <InputField>
          <FaSearch color="white" />
          <Input
            onChange={handleChange}
            type="text"
            placeholder="Search for a country..."
          />
        </InputField>

        <CountrysContainer>
          {filteredCountries.map((country) => {
            return (
              <>
                <Countrys
                  key={country.alpha3Code}
                  image={country.flags.svg}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  region={country.subregion}
                  showDetails={showDetails}
                  code={country.alpha3Code}
                />
              </>
            );
          })}
        </CountrysContainer>
      </Container>
    </>
  );
}

export default Countries;
