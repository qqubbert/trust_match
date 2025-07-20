import { useState, type FC } from "react";
import type { UserType } from "@shared/types/UserTypes";

import "./UserCard.scss";

import { ProfileImages } from "@widgets/ProfileImages";
import { LabeledList } from "@widgets/LabeledList";
import { TagCard } from "@entities/TagCard";
import { CustomInput } from "@shared/ui/Input";
import { PersonInfo } from "@widgets/PersonInfo";
import { OverflowingList } from "@widgets/OverflowingList";

import { useLongPress } from "@shared/lib/useLongPress";

type CandidateCardProps = {
  user: UserType;
  classes?: string;
};

export const UserCard: FC<CandidateCardProps> = ({ user, classes = "" }) => {
  const [isInfoHidden, setIsInfoHidden] = useState(false);

  const longPressRef = useLongPress(
    () => setIsInfoHidden(true),
    () => setIsInfoHidden(false),
    250
  );

  return (
    <div
      className={`user-card-container ${!isInfoHidden ? "show-info" : ""} ${classes}`}
      ref={longPressRef}
    >
      <div className="user-card">
        {/* <ProfileImages images={user.images} isOwn={false} isVisible={false}/> */}
        <ProfileImages
          images={user.images}
          isOwn={false}
          isVisible={true}
          isFullSize={true}
        />
        <div className="user-info">
          <div className="top">
            <LabeledList title={`Общие интересы`}>
              {user.tags && user.tags.length > 0 ? (
                <OverflowingList renderItem={(tag)=><TagCard tagData={tag}/>} items={user.tags} maxCount={3} overflowText={["общий интерес", 'общих интереса', 'общих интересов']}/>
              ) : (
                <></>
              )}
            </LabeledList>
          </div>
          <div className="bottom">
            <PersonInfo person={user.person} />
            <p className="hint">
              Нажмите, чтобы посмотреть подробную информацию
            </p>
          </div>
        </div>
      </div>
      <CustomInput
        inputLabel="Напишите, если понравилась анкета!"
        placeholder="Введите сообщение..."
      />
    </div>
  );
};
