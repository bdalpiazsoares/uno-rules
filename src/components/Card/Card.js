import React from 'react'
import styles from './card.module.scss'

export const Card = ({ image, name = '', description = '' }) => {
  const { container, imageStyle, nameStyle, descriptionStyle } = styles
  return (
    <div className={container}>
      <img className={imageStyle} src={image} alt='card-img' />
      <span className={nameStyle}>{name}</span>
      <span className={descriptionStyle}>{description}</span>
    </div>
  )
}