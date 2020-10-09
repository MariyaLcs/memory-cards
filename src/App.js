import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };
  const showList = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };
  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return <Dropdown />;
    }
  };
  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
