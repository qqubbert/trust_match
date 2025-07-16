import { type FC } from "react";
import type { PersonInfoType } from "@shared/types/UserTypes";

import "./PersonInfo.scss";

type PersonInfoProps = {
  person: PersonInfoType;
}

export const PersonInfo: FC<PersonInfoProps> = ({
  person,
}) => {
  return (
    <div className="person-info">
      <div className="name-container">
        <div className="name-and-btn">
          <h1>{person.name}</h1>
        </div>
        <div className="icons"></div>
      </div>
      <hr />
      <p>
        {person.description}
      </p>
    </div>
  );
};
