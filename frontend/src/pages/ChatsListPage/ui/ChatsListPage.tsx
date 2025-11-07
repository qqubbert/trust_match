import { PageHeader } from "@widgets/PageHeader";

import { ChatCard } from "@entities/ChatCard/ui/ChatCard";

import { LabeledList } from "@widgets/LabeledList";

import { testChatsData as chatsData } from "@shared/data/testData/testChats";

export function ChatsListPage() {
  return (
    <>
      <PageHeader title="Чаты" />
      <div className="page">
        <LabeledList hasLabel={false} classes="small-hor-padding">
          {chatsData && chatsData.length > 0 ? (
            chatsData.map((chat, i) => {
              return <ChatCard key={`chat-${i}`} chatData={chat} />;
            })
          ) : (
            <></>
          )}
        </LabeledList>
      </div>
    </>
  );
}
