import "./SearchSuggestion.css";

export function SearchSuggestion({
  selected = [],
  onChangeSelected = () => {},
  data = sampleData,
}) {
  return (
    <div className="suggestions-container">
      {data.map((location) => {
        const isSelected = selected.includes(location.name);
        const atCap = selected.length >= 5 && !isSelected;
        return (
          <button
            key={location.name}
            className={`center-button${isSelected ? "-selected" : ""}`}
            value={location.name}
            onClick={() => onChangeSelected(location.name)}
            disabled={atCap}
            aria-pressed={isSelected}
          >
            {location.name}
          </button>
        );
      })}
    </div>
  );
}
