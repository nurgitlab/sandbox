import { themes, ThemeContext } from "./contexts/theme-context";
import React from "react";
import PageWrapper from "./components/PageWrapper";

function App() {
  const [selectedTheme, changeTheme] = React.useState(ThemeContext);

  const toogleTheme = () => {
    changeTheme((prevTheme) => {
      if (prevTheme === themes.light) {
        prevTheme = themes.dark;
      } else {
        prevTheme = themes.light;
      }
    });
  };

  return (
    <div>
      <ThemeContext.Provider value={selectedTheme}>
        <PageWrapper />
      </ThemeContext.Provider>
      <button onClick={toogleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
