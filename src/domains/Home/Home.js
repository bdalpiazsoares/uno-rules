import React from 'react'
import { Button } from '../../components/Button/Button'
import { homeTextFirst, homeTextSecond } from '../../utils/utils'
import styles from './home.module.scss'

export const Home = () => {
  const { containerHistory, title, text, sectionContainer, containerButton, containerTest } = styles

  return (
    <section className={sectionContainer} id='home'>
      <div className={containerHistory}>
        <div className={containerTest}>
          <h1 className={title}>Todos gostamos de uma boa partida de UNO não é mesmo?</h1>
          <p className={text}>{homeTextFirst}</p>
          <p className={text}>{homeTextSecond}</p>
          <div className={containerButton}>
            <Button name='Confira as regras' navigateTo='rules' />
          </div>
        </div>
      </div>
    </section>
  )
}