import { type FC } from "react"

import './NavPanel.scss'

import { NavItem } from "@shared/ui/NavItem/ui/NavItem"

import Chats from "@icons/Chats/Chats.svg?react"

type NavigationPanelProps = {
  className?: string,
}

export const NavPanel: FC<NavigationPanelProps> = ({ className }) => {
  return (
    <header className={`${className} nav-panel`}>
      <nav>
        <NavItem icon={Chats} title={`Чаты`}/>
      </nav>
    </header>
  )
}