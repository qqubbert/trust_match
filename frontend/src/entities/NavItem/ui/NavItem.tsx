import type { FC } from "react";

import "./NavItem.css";

import { type LinkType } from "@config/pageLinks";

import { Link } from "react-router-dom";

type NavItemProps = {
  link: LinkType;
  className?: string;
  selected: boolean;
  clickFunc: () => void;
};

export const NavItem: FC<NavItemProps> = ({
  link,
  className = "",
  selected = false,
  clickFunc = () => {},
}) => {
  const Icon = link.icon;

  return (
    <Link
      to={link.path}
      className={`nav-item ${className} ${selected ? "selected" : ""} `}
      onClick={clickFunc}
    >
      <Icon />
      <span>{link.title}</span>
    </Link>
  );
};
