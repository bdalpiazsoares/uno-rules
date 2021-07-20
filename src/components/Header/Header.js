import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './header.module.scss'

export const Header = () => {
  const { containerHeader, navTitle, containerNavTitle, containerHeaderActive } = styles
  const [navbar, setNavbar] = useState(false)

  const NavButton = ({ name, navigateTo }) => {
    return (
      <Link className={navTitle} to={navigateTo} smooth={true} duration={1000}>{name}</Link>
    )
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) setNavbar(true)
    else setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground)
  
  return (
    <div className={navbar ? containerHeader : containerHeaderActive}>
      <div className={containerNavTitle}>
        <NavButton name='Home' navigateTo='home' />
        <NavButton name='Regras' navigateTo='rules' />
        <NavButton name='Cartas' navigateTo='cards' />
      </div>
    </div>
  )
}