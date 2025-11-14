import atlas_data from "./brain_locations.json";
import { useState } from "react";
import "./Atlas.css";

export function Atlas() {
  const [selected, setSelected] = useState([]); // array of names

  const addCenter = ({ target }) => {
    const clickedCenter = target.value;
    setSelected((prev) => {
      if (prev.includes(clickedCenter)) {
        return prev.filter((n) => n !== clickedCenter); // toggle off
      } else if (prev.length >= 5) {
        return prev; // cap at 5
      } else {
        return [clickedCenter, ...prev];
      }
    });
  };

return (
    <div>
        <div className="container">
            <h1 className="title-1">Brain Atlas</h1>

            <div className="buttons">
            {atlas_data.brain_locations.map((location) => {
                    const isSelected = selected.includes(location.name);
                    const atCap = selected.length >= 5 && !isSelected;
                    return (
                            <button
                            key={location.name}
                            className={`center-button ${isSelected ? "selected" : ""}`}
                            value={location.name}
                            onClick={addCenter}
                            disabled={atCap}
                            aria-pressed={isSelected}
                            >
                            {location.name}
                            </button>
                    );
            })}
            </div>
        </div>

        <div className="container">
            <h1 className="title-1">{selected.length > 0 ? 'Selected Centers ' : ''}</h1>
            <div className="selected-info">
                {selected.map((name) => {
                    const loc = atlas_data.brain_locations.find((loc) => loc.name === name);
                    return <SelectedCenter key={loc.name} location={loc} />;
                })}
            </div>
        </div>
    </div>
);
}

function SelectedCenter({ location }) {
    return (
        <div className="center-card">
            <img src={location.src} alt={location.name} className="center-image" />
            <div className="center-info">
                <h3 className="center-title">{location.name}</h3>
                <p>{location.acronym}, {location.id}</p>
                <ul className="center-details">
                    <li>X Coordinate: {location.mci_coords.x} mm</li>
                    <li>Y Coordinate: {location.mci_coords.y} mm</li>
                    <li>Z Coordinate: {location.mci_coords.z} mm</li>
                </ul>
            </div>
        </div>
    );
}
