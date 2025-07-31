import { PageHeader } from "@widgets/PageHeader";

import { ChatCard } from "@entities/ChatCard/ui/ChatCard";

import { LabeledList } from "@widgets/LabeledList";

export function ChatsListPage() {
  const chatsData = [
    {
      id: 1,
      chatImage: '/images/usersPreview/girls/girl2/girl2_1.jpg',
      chatTitle: 'Маша',
      lastMessage: 'Как прошёл твоё день?',
      isChecked: false,
      isImageVisible: true,
      checkCount: 2,
    },
    {
      id: 2,
      chatImage: '/images/usersPreview/girls/girl1/girl1_1.jpg',
      chatTitle: 'Юля',
      lastMessage: 'Может сходим погулять?',
      isChecked: true,
      isImageVisible: true,
      checkCount: 5,
    },
  ]

  return (
    <>
      <PageHeader title="Чаты"/>
      <div className="page">
        <LabeledList hasLabel={false} classes="small-hor-padding">
          {chatsData && chatsData.length > 0 ? (
            chatsData.map((chat, i)=>{
              return (
                <ChatCard key={`chat-${i}`} chatData={chat}/>
              )
            })
          ) : (<></>)}
        </LabeledList>
      </div>
    </>
  );
}
