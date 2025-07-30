import { type FC, type ReactNode, useState } from 'react';

import Arrow from '@icons/Arrows/ArrowBottom.svg?react';

import './ClosingList.scss';

type ClosingListProps = {
  children: ReactNode;
  title: string;
}

export const ClosingList: FC<ClosingListProps> = ({
  children,
  title = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const titleClickHandler = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <div className={`closing-list ${isOpen ? "opened" : ""}`}>
        <div className="title-container" onClick={titleClickHandler}>
          <span>{title}</span>
          <Arrow />
        </div>
        {children}
      </div>
    </>
  )
}