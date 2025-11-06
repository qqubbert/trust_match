import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./PageHeader.css";

import Menu from "@icons/Menu/DotsMenu.svg?react";

import Back from "@icons/Arrows/ArrowLeft.svg?react";

// import { allPageLinks } from "@shared/config/pageLinks";

type PageHeaderProps = {
  title: string;
  hasBackBtn?: boolean;
  leftBtns?: ReactNode;
  infoLeft?: ReactNode;
  infoRight?: ReactNode;
  backLink?: string;
};

export const PageHeader: FC<PageHeaderProps> = ({
  hasBackBtn = false,
  title = "",
  leftBtns,
  infoLeft,
  infoRight,
  backLink = "",
}) => {
  return (
    <header className="page-header">
      <div className="header-bg"></div>
      <section className="info">
        {hasBackBtn && (
          <Link to={backLink} className="back-btn">
            <Back />
          </Link>
        )}
        {infoLeft}
        <span>{title}</span>
        {infoRight}
      </section>
      <section className="btns">
        {leftBtns}
        <button>
          <Menu />
        </button>
      </section>
    </header>
  );
};
