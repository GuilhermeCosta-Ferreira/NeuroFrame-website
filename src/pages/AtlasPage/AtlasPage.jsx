import "./AtlasPage.css";
import sampleData_full from "../../assets/brain_locations.json";
const data = sampleData_full["brain_locations"];

import { SearchBar } from "@/components/SearchBar";
import { CenterCard } from "../../components/CenterCard";
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
      <div className="container">
        <SearchBar selected_options={selected} onAddOption={addCenter} />
      </div>

      <div className="container">
        <h1 className="title-1">
          {selected.length > 0 ? "Selected Centers " : ""}
        </h1>

        <div>
          {selected.map((name) => {
            // ideally look in full sampleData here, not only `data`
            const loc = data.find((l) => l.name === name);
            return (
              <CenterCard
                key={loc.name}
                location={loc}
                onChangeSelected={addCenter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
