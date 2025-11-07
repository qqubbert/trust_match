import { type FC } from "react";
import { useLocation } from "react-router-dom";

import "./NavPanel.css";

import { NavItem } from "@entities/NavItem";

import { navPageLinksArray } from "@shared/config/pageLinks";

type NavigationPanelProps = {
  className?: string;
  hideNav: boolean;
};

export const NavPanel: FC<NavigationPanelProps> = ({
  className = "",
  hideNav = true,
}) => {
  const location = useLocation();

  const getSelectedIndex = () => {
    const currentPath = location.pathname.replace(/^\/+/, "");
    return navPageLinksArray.findIndex((link) => currentPath === link.path);
  };

  const selectedIndex = getSelectedIndex();

  return (
    <header className={`${className} nav-panel ${hideNav ? "hide" : ""}`}>
      <div className="nav-bg"></div>
      <nav>
        {navPageLinksArray.map((pageLink, i) => {
          return (
            <NavItem
              link={pageLink}
              key={pageLink.path}
              selected={selectedIndex === i}
              clickFunc={() => {}}
            />
          );
        })}
      </nav>
    </header>
  );
};
