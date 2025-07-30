import "./SingleChat.scss";

import { CustomInput } from "@shared/ui/Input";
import { PageHeader } from "@widgets/PageHeader";
import { ChatMessage } from "@entities/ChatMessage";
import { ScrollAnchor } from "@shared/ui/ScrollAnchor/ui/ScrollAnchor";

import { allPageLinks } from "@shared/config/pageLinks";

export const SingleChatPage = () => {
  const selfUserId = 1;

  const messages = [
    { userId: 1, textMessage: "Привет" },
    { userId: 1, textMessage: "Привет" },
    { userId: 1, textMessage: "Привет" },
    { userId: 1, textMessage: "Как дела у тебя?" },
    { userId: 2, textMessage: "Привет" },
    { userId: 2, textMessage: "Привет" },
    { userId: 2, textMessage: "Привет" },
    { userId: 2, textMessage: "Нууу.... Сейчас расскажу" },
    { userId: 2, textMessage: "Нууу.... Сейчас расскажу" },
    { userId: 2, textMessage: "Нууу.... Сейчас расскажу" },
    {
      userId: 2,
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
    },
    {
      userId: 2,
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
    },
    {
      userId: 2,
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
    },
    { userId: 1, textMessage: "Ахуй" },
    { userId: 1, textMessage: "Интересная история" },
    {
      userId: 2,
      textMessage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde.",
    },
    { userId: 2, textMessage: "Хочешь погулять сходить?" },
    { userId: 2, textMessage: "Хочешь погулять сходить?" },
    { userId: 2, textMessage: "Хочешь погулять сходить?" },
  ];

  return (
    <>
      <PageHeader
        title="Чат"
        hasBackBtn={true}
        backLink={allPageLinks.chats.link([])}
      />
      <div className="page single-chat">
        <div className="messages-container">
          <div className="messages">
            {messages && messages.length > 0 ? (
              messages.map((msg, i) => {
                const isSelf = selfUserId === msg.userId;
                const prevMsg = messages[i - 1];
                const nextMsg = messages[i + 1];

                const isFirstInGroup =
                  i === 0 || msg.userId !== prevMsg?.userId;
                const isGrouped = 
                  (msg.userId === prevMsg?.userId) || 
                  (msg.userId === nextMsg?.userId)
                ;
                const isLastInGroup =
                  i === messages.length - 1 || msg.userId !== nextMsg?.userId;

                return (
                  <ChatMessage
                    key={`msg-${i}`}
                    isSelf={isSelf}
                    messageText={msg.textMessage}
                    // showProfileIcon={!isSelf}
                    showProfileIcon={false}
                    // showGroupIcon={isLastInGroup}
                    showGroupIcon={false}
                    isGrouped={isGrouped}
                    isFirstInGroup={isFirstInGroup}
                    isLastInGroup={isLastInGroup}
                  />
                );
              })
            ) : (
              <></>
            )}
          <ScrollAnchor behavior="instant"/>
          </div>
        </div>
        <CustomInput />
      </div>
    </>
  );
};
