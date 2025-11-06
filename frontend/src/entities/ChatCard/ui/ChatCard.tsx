import { type FC } from "react";

import { Link } from "react-router-dom";

import "./ChatCard.css";

import type { ChatType } from "@shared/types/ChatType";

import { allPageLinks } from "@shared/config/pageLinks";

type ChatCardProps = {
  chatData: ChatType;
};

export const ChatCard: FC<ChatCardProps> = ({ chatData }) => {
  return (
    <Link
      to={allPageLinks.singleChat.link(Array.from(String(chatData.id)))}
      className={`chat-card ${chatData.isImageVisible ? "visible" : ""}`}
    >
      <img src={chatData.chatImage} alt={chatData.chatTitle} />
      <div className="text-info">
        <span>{chatData.chatTitle}</span>
        <p>{chatData.lastMessage}</p>
      </div>
      {chatData.isChecked && (
        <div className="notification-circle">
          {chatData.checkCount > 0 ? <span>{chatData.checkCount}</span> : <></>}
        </div>
      )}
    </Link>
  );
};
