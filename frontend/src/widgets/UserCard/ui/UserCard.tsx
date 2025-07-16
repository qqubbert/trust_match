import { useEffect, useState, type FC } from 'react';
import type { UserType } from '@shared/types/UserTypes';

import './UserCard.scss';

import { ProfileImages } from '@widgets/ProfileImages';
import { LabeledList } from '@widgets/LabeledList';
import { TagCard } from '@entities/TagCard';
import { Input } from '@shared/ui/Input';
import { PersonInfo } from '@widgets/PersonInfo';

type CandidateCardProps = {
  user: UserType,
}

export const UserCard: FC<CandidateCardProps> = ({ user }) => {

  const [isInfoHidden, setIsInfoHidden] = useState(false);
  
  // useEffect(()=>{
  //   console.log(user);
  // },[]);

  return (
    <div className={`user-card-container ${!isInfoHidden ? "show-info" : ""}`}>
      <div className="user-card">
        {/* <ProfileImages images={user.images} isOwn={false} isVisible={false}/> */}
        <ProfileImages images={user.images} isOwn={false} isVisible={true}/>
        <div className="user-info">
          <div className="top">
            <LabeledList title={`Общие интересы`}>
              {user.tags && user.tags.length > 0 ? (
                user.tags.map((tag)=>{
                  return (
                    <TagCard tagData={tag}/>
                  )
                })
              ) : (<></>)}
            </LabeledList>
          </div>
          <div className="bottom">
            <PersonInfo person={user.person}/>
          </div>
        </div>
      </div>
      <Input
        inputLabel="Напишите, если понравилась анкета!"
        placeholder="Введите сообщение..."
      />
    </div>
  )
}