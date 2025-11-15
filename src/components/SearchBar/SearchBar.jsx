import "./SearchBar.css";
import sampleData_full from "../../assets/brain_locations.json";
const sampleData = sampleData_full["brain_locations"];

import { useState, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import { SearchSuggestion } from "./SearchSuggestions";

export function SearchBar({ selected_options = [], onAddOption = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === "") {
        setSearchResults([]);
      } else {
        const results = sampleData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
      }
    }, 300),
    []
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-container" onSubmit={(e) => e.preventDefault()}>
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search up to 5 locations"
          />
          <div>
            <button type="submit">
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
      {searchResults.length > 0 && (
        <SearchSuggestion
          selected={selected_options}
          data={searchResults}
          onChangeSelected={onAddOption}
          className="results"
        />
      )}
    </div>
  );
}
