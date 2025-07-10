import type { FC, ReactNode } from "react";

import './LabeledList.scss';

type LabeledListProps = {
  title?: string;
  children: ReactNode,
}

export const LabeledList: FC<LabeledListProps> = ({children, title }) => {
  return (
    <>
      <div className="labeled-list">
        <div className="label-container">
          <hr />
          {title}
          <hr />
        </div>
        {children}
      </div>
    </>
  )
}
