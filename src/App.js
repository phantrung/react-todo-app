import logo from "./logo.svg";
import "./App.css";

import CoreAppProvider from "./components/Core/Provider/CoreAppProvider";
import Header from "./components/Core/Layout/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <CoreAppProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </CoreAppProvider>
  );
}

export default App;
