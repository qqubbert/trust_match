import type { FC } from "react";
import "./Label.scss";

type LabelProps = {
  text: string;
  hasLines?: boolean;
}

export const Label: FC<LabelProps> = ({ text, hasLines = true }) => {
  return (
    <>
      <div className="label-container">
        {hasLines && <hr />}
        {text}
        {hasLines && <hr />}
      </div>
    </>
  );
};
