import React from 'react'
import { Link } from 'react-scroll'
import styles from './button.module.scss'

export const Button = ({ name = '', navigateTo = '' }) => {
  const { buttonStyle } = styles
  return <Link className={buttonStyle} to={navigateTo} smooth={true} duration={1000}>{name}</Link>
}