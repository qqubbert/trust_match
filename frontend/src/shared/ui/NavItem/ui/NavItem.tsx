import { type FC } from "react"
import { type ComponentType } from "react"

import './NavItem.scss'

type NavItemProps = {
  icon: ComponentType,
  title: string,
}

export const NavItem: FC<NavItemProps> = ({ icon: Icon, title }) => {
  return (
    <div className="nav-item">
      <Icon />
      <span>
        {title}
      </span>
    </div>
  )
}