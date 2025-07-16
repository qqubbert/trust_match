import type { FC, ReactNode } from "react";

import './LabeledList.scss';

import { Label } from "@shared/ui/Label";

type LabeledListProps = {
  title?: string;
  children: ReactNode,
}

export const LabeledList: FC<LabeledListProps> = ({children, title = "" }) => {
  return (
    <>
      <div className="labeled-list">
        <Label title={title}/>
        {children}
      </div>
    </>
  )
}
