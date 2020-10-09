import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

class App extends React.Component {
  render() {
    const items = [
      { title: "Family", content: "Where are you from originally?" },
      { title: "Occupation", content: "What do they do for a living?" },
      { title: "Recreation", content: "What do they do for fun?" },
      { title: "Dreams", content: "What are your plans for the next year?" },
    ];
    const options = [
      { label: "London", value: "option1" },
      { label: "Moscow", value: "option2" },
      { label: "Tokio", value: "option13" },
    ];
    return (
      <div>
        <Dropdown options={options} />
      </div>
    );
  }
}

export default App;
