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
    { label: "London", value: "option1" },
    { label: "Moscow", value: "option2" },
    { label: "Tokio", value: "option3" },
  ];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
