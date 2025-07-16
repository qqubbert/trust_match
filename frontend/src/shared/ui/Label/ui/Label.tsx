import type { FC } from "react";
import "./Label.scss";

type LabelProps = {
  title: string;
}

export const Label: FC<LabelProps> = ({ title }) => {
  return (
    <>
      <div className="label-container">
        <hr />
        {title}
        <hr />
      </div>
    </>
  );
};
