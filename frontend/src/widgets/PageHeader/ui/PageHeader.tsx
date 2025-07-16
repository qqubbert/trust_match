import type { FC } from "react"

import './PageHeader.scss'

import Menu from '@icons/Menu/DotsMenu.svg?react'

type PageHeaderProps = {
  title: string,
}

export const PageHeader: FC<PageHeaderProps> = ({ title = "" }) => {
  return (
    <header className="page-header">
      <section className="info">
        <span>{title}</span>
      </section>
      <section className="btns">
        <button>
          <Menu />
        </button>
      </section>
    </header>
  )
}