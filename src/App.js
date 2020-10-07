import React from "react";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    { title: "Family", content: "Where are you from originally?" },
    { title: "Occupation", content: "What do they do for a living?" },
    { title: "Recreation", content: "What do they do for fun?" },
    { title: "Dreams", content: "What are your plans for the next year?" },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
