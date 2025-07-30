import type {  ComponentType, ReactNode } from 'react';

import Chats from '@icons/Chats/Chats.svg?react';
import Games from '@icons/Games/Games.svg?react';
import Candidates from '@icons/Candidates/Candidates.svg?react';
import Mail from '@icons/Mail/Mail.svg?react';
import Profile from '@icons/Profile/Profile.svg?react';

import { CandidatesPage } from '../../pages/CandidatesPage';
import { GamesListPages } from '../../pages/GamesListPage';
import { ChatsListPage } from '../../pages/ChatsListPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { MailPage } from '../../pages/MailPage';
import { SingleChatPage } from '@pages/SingleChat';

export type LinkType = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  title: string;
  element: ReactNode;
  link: (params: string[]) => string;
}

export const navPageLinks: Record<string, LinkType> = {
  chats: { link: ()=> `/chats`, path: 'chats', icon: Chats, title: 'Чаты', element: <ChatsListPage /> },
  games: { link: ()=> `/games`, path: 'games', icon: Games, title: 'Игры', element: <GamesListPages /> },
  candidates: { link: ()=> `/`, path: '', icon: Candidates, title: 'Кандидаты', element: <CandidatesPage /> },
  mail: { link: ()=> `/mail`, path: 'mail', icon: Mail, title: 'Уведомления', element: <MailPage /> },
  profile: { link: ()=> `/profile`, path: 'profile', icon: Profile, title: 'Профиль', element: <ProfilePage /> },
};

export const allPageLinks: Record<string, LinkType> = {
  ...navPageLinks,
  candidatesHistory: { link: ()=> `/candidates_history`, path: 'candidates_history', icon: Candidates, title: 'История кандидатов', element: <CandidatesPage/> },
  singleGame: { link: (params) => `/games/${params[0]}`, path: 'games/:gameId', icon: Games, title: 'Игра', element: <GamesListPages/> },
  singleChat: { link: (params) => `/chats/${params[0]}`, path: 'chats/:chatId', icon: Chats, title: 'Чат', element: <SingleChatPage/> },
};

export const navPageLinksArray: LinkType[] = Object.values(navPageLinks);
export const allPageLinksArray: LinkType[] = Object.values(allPageLinks);