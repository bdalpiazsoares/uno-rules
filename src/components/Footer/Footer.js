import React from 'react'
import styles from './footer.module.scss'
import image from '../../assets/github-image.png'

export const Footer = () => {
  const { container, imageStyle } = styles

  const redirectTo = () => window.open('https://github.com/bdalpiazsoares')

  return (
    <div className={container}>
      <img onClick={redirectTo} className={imageStyle} src={image} alt='github-logo' />
    </div>
  )
}