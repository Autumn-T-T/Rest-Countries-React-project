import { useState, useContext } from "react";
import useCountries from "./hooks/useCountries";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { darkMode } = useContext(ThemeContext);

  const filtered = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
    );
  });

  if (loading) return <h2>Loading countries...</h2>;
  if (error) return <h2>Error loading data</h2>;

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className="header">
        <h1>Country Explorer</h1>
        <ThemeToggle />
      </header>

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter setRegion={setRegion} />
      </div>

      <CountryList countries={filtered} />
    </div>
  );
}

export default App;