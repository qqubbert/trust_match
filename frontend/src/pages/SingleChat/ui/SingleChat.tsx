import "./SingleChat.scss";

import { CustomInput } from "@shared/ui/Input";
import { PageHeader } from "@widgets/PageHeader";

import { allPageLinks } from "@shared/config/pageLinks";

export const SingleChatPage = () => {
  return (
    <>
      <PageHeader title="Чат" hasBackBtn={true} backLink={allPageLinks.chats.link([])}/>
      <div className="page single-chat">
        <div className="messages">

        </div>
        <CustomInput />
      </div>
    </>
  );
};
