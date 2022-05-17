import GlobalStyles from "./styles/GlobalStyles";

import { Container, Input, InputField, CountrysContainer } from "./styles";

import { FaSearch } from "react-icons/fa";
import Countrys from "./components/Countrys";
import { useEffect, useState } from "react";

function App() {
  const [countrys, setCountrys] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // const pages = Math.ceil(countrys.length / itensPerPage);
  // const startIndex = currentPage * itensPerPage;
  // const endIndex = startIndex + itensPerPage;
  // const currentCountrys = countrys.slice(startIndex, endIndex);

  useEffect(() => {
    async function getInitialData() {
      const response = await fetch("https://restcountries.com/v2/all");

      const data = await response.json();

      console.log(data);
      setCountrys(data);
    }

    getInitialData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountrys = countrys.filter((country) =>
    country.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

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
          {filteredCountrys.map((country) => {
            return (
              <>
                <Countrys
                  key={country.name}
                  image={country.flags.svg}
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  region={country.subregion}
                />
              </>
            );
          })}
        </CountrysContainer>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
