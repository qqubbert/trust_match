import type { FC, ReactNode } from "react";

import "./LabeledList.css";

import { Label } from "@shared/ui/Label";

type LabeledListProps = {
  title?: string;
  hint?: string;
  children: ReactNode;
  hasLabel?: boolean;
  hasHint?: boolean;
  classes?: string;
};

export const LabeledList: FC<LabeledListProps> = ({
  classes = "",
  children,
  title = "",
  hint = "",
  hasLabel = true,
  hasHint = false,
}) => {
  return (
    <>
      <div className={`labeled-list ${classes}`}>
        {hasLabel && <Label text={title} hasLines={true} />}
        {hasHint && <Label text={hint} hasLines={false} />}
        {children}
      </div>
    </>
  );
};
