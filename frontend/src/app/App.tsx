import "./App.css";

import { NavPanel } from "../widgets/NavigationPanel";

import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { HideNavContext } from "@features/HideNavigationContext";

function App() {
  const { showNav } = useContext(HideNavContext);

  return (
    <>
      <NavPanel hideNav={!showNav} />
      <Outlet />
    </>
  );
}

export default App;
