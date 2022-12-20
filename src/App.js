import "./App.css";
import { useContext } from "react";
import { themeContext } from "../src/Context/Context";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
