import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    const items = [
      { title: "Family", content: "Where are you from originally?" },
      { title: "Occupation", content: "What do they do for a living?" },
      { title: "Recreation", content: "What do they do for fun?" },
      { title: "Dreams", content: "What are your plans for the next year?" },
    ];
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
