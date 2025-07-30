import { type FC } from 'react';

import './ChatMessage.scss';

type ChatMessageProps = {
  isSelf: boolean;
  messageText: string;
  isGrouped?: boolean;
  showGroupIcon?: boolean;
  isLastInGroup?: boolean;
  isFirstInGroup?: boolean;
  showProfileIcon?: boolean;
  // TODO
  // add linked images and linked links in msg text
}

export const ChatMessage: FC<ChatMessageProps> = ({
  isSelf = false,
  messageText = "",
  showGroupIcon = true,
  showProfileIcon = true,
  isLastInGroup = true,
  isFirstInGroup = true,
  isGrouped = false,
}) => {

  return (
  <>
    <div className={`message-wrapper ${isSelf ? "self" : ""} ${isGrouped ? "grouped" : ""} ${isLastInGroup ? "group-last" : ""} ${isFirstInGroup ? "group-first" : ""}`}>
      <div className={`message-container `}>
        {showProfileIcon && 
        <div className="profile-icon">
          {showGroupIcon && <img src="/images/usersPreview/girls/girl4/girl4_1.jpg" alt="" className='profile-icon'/>}
        </div>
        }
        <div className={`message `}>
          <span>{messageText}</span>
        </div>  
      </div>
    </div>
  </>
  )
}