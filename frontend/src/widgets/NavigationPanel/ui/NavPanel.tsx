import { useState, type FC } from 'react'

import './NavPanel.scss'

import { NavItem } from '@entities/NavItem';

import { navPageLinksArray } from '../../../shared/config/pageLinks';

type NavigationPanelProps = {
  className?: string,
}

export const NavPanel: FC<NavigationPanelProps> = ({ className = '' }) => {
  const [selectedPage, setSelectedPage] = useState(2);

  function navClickFunc(i: number) {
    setSelectedPage(i);
  }

  return (
    <header className={`${className} nav-panel `}>
      <nav>
        {navPageLinksArray.map((link, i)=>{
          return (
            <NavItem link={link} key={link.path} selected={selectedPage === i} clickFunc={()=>{navClickFunc(i)}}/>
          )
        })}
      </nav>
    </header>
  )
}