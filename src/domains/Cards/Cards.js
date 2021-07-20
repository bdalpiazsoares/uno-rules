import React from 'react'
import { Card } from '../../components/Card/Card'
import { cards } from '../../utils/utils'
import styles from './cards.module.scss'

export const Cards = () => {
  const { container, containerCards } = styles

  return (
    <section className={container} id='cards'>
      <div className={containerCards}>
        {cards.map(({ name, image, description}) => <Card key={name} name={name} image={image} description={description} />)}
      </div> 
    </section>
  )
}