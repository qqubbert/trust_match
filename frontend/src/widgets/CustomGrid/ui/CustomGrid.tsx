import { type FC, type ReactNode } from "react";

import "./CustomGrid.css";

type CustomGridProps = {
  children: ReactNode;
  hasLabel?: boolean;
  title?: string;
};

export const CustomGrid: FC<CustomGridProps> = ({
  children,
  hasLabel = false,
  title = "",
}) => {
  return (
    <>
      <div className="custom-grid-container">
        {hasLabel && <h1>{title}</h1>}
        <div className="custom-grid" data-size="112px">
          {children}
        </div>
      </div>
    </>
  );
};
