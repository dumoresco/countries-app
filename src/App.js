import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Input, InputField, CountrysContainer } from "./styles";
import Country from "./Pages/Country";
import GlobalStyles from "./styles/GlobalStyles";
import { FaSearch } from "react-icons/fa";

import Countrys from "./components/Countrys";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getInitialData() {
      const response = await fetch("https://restcountries.com/v2/all");

      const data = await response.json();

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container>
                {" "}
                <div className="container">
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
                </div>
              </Container>
            </>
          }
        ></Route>
        <Route
          path="/:name"
          element={<Country countries={countries} />}
        ></Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
