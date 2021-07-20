import React from 'react'
import { Button } from '../../components/Button/Button'
import { homeTextFirst, homeTextSecond } from '../../utils/utils'
import styles from './home.module.scss'

export const Home = () => {
  const { containerHistory, title, text, sectionContainer, containerButton } = styles

  return (
    <section className={sectionContainer} id='home'>
      <div className={containerHistory}>
        <h1 className={title}>Todos gostamos de uma boa partida de UNO não é mesmo?</h1>
        <small className={text}>{homeTextFirst}</small>
        <small className={text}>{homeTextSecond}</small>
        <div className={containerButton}>
          <Button name='Confira as regras' navigateTo='rules' />
        </div>
      </div>
    </section>
  )
}