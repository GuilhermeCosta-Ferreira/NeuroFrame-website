import "./AtlasPage.css";
import sampleData_full from "../../assets/brain_locations.json";
const data = sampleData_full["brain_locations"];

import { SearchBar, SelectedCenter } from "@/components/SearchBar";
import { useState } from "react";

export function AtlasPage() {
  const [selected, setSelected] = useState([]); // array of names

  const addCenter = (clickedCenter) => {
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
    <div className="atlas-page">
      <SearchBar selected_options={selected} onAddOption={addCenter} />
      <div className="container">
        <h1 className="title-1">
          {selected.length > 0 ? "Selected Centers " : ""}
        </h1>
        <div className="selected-info">
          {selected.map((name) => {
            // ideally look in full sampleData here, not only `data`
            const loc = data.find((l) => l.name === name);
            if (!loc) {
              return (
                <div key={name} className="selected-center">
                  {name}
                </div>
              );
            }
            return <SelectedCenter key={loc.name} location={loc} />;
          })}
        </div>
      </div>
    </div>
  );
}
