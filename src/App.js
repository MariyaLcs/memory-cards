import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const App = () => {
  const items = [
    { title: "Family", content: "Where are you from originally?" },
    { title: "Occupation", content: "What do they do for a living?" },
    { title: "Recreation", content: "What do they do for fun?" },
    { title: "Dreams", content: "What are your plans for the next year?" },
  ];
  const options = [
    { label: "London", value: "London" },
    { label: "Moscow", value: "Moscow" },
    { label: "Tokio", value: "Tokio" },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      )}
    </div>
  );
};

export default App;
