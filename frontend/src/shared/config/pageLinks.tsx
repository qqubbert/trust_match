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

export type LinkType = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>,
  path: string,
  title: string,
  element: ReactNode,
}

export const navPageLinks: Record<string, LinkType> = {
  chats: { path: 'chats', icon: Chats, title: 'Чаты', element: <ChatsListPage /> },
  games: { path: 'games', icon: Games, title: 'Игры', element: <GamesListPages /> },
  candidates: { path: '', icon: Candidates, title: 'Кандидаты', element: <CandidatesPage /> },
  mail: { path: 'mail', icon: Mail, title: 'Советы', element: <MailPage /> },
  profile: { path: 'profile', icon: Profile, title: 'Профиль', element: <ProfilePage /> },
};

export const allPageLinks: Record<string, LinkType> = {
  ...navPageLinks,
  candidatesHistory: { path: 'candidates_history', icon: Candidates, title: 'История кандидатов', element: <CandidatesPage/> },
  singleGame: { path: 'games/:gameId', icon: Games, title: 'Игра', element: <GamesListPages/> },
  singleChat: { path: 'chats/:chatId', icon: Chats, title: 'Чат', element: <ChatsListPage/> },
};

export const navPageLinksArray: LinkType[] = Object.values(navPageLinks);
export const allPageLinksArray: LinkType[] = Object.values(allPageLinks);