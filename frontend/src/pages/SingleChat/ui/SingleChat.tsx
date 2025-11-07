import "./SingleChat.css";

import { CustomInput } from "@shared/ui/Input";
import { PageHeader } from "@widgets/PageHeader";
import { ChatMessage } from "@entities/ChatMessage";
import { ScrollAnchor } from "@shared/ui/ScrollAnchor/ui/ScrollAnchor";

import { allPageLinks } from "@shared/config/pageLinks";

import { useHideNav } from "@shared/lib/useHideNav";

import { testMessages } from "@shared/data/testData/testMessages";

export const SingleChatPage = () => {
  const selfUserId = 1;

  const messages = testMessages;

  useHideNav();

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
                  msg.userId === prevMsg?.userId ||
                  msg.userId === nextMsg?.userId;
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
            <ScrollAnchor behavior="smooth" />
          </div>
        </div>
        <CustomInput
          classes="chat-input"
          hasMicBtn={true}
          hasVideoBtn={true}
          hasLikeBtn={false}
        />
      </div>
    </>
  );
};
