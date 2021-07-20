import React from 'react'
import { gameobjective, gamePrepareFirst, gamePrepareSecond, gamePrepareThird, gamePlayFirst, gamePlaySecond, gameobjectiveSecond } from '../../utils/utils'
import styles from './rules.module.scss'

export const Rules = () => {
  const { container, title, subtitle, descriptionRules, infoFontStyle } = styles
  
  return (
    <section className={container} id='rules'>
      <span className={title}>Regras e Objetivos</span>
      <p className={descriptionRules}>{gameobjective}</p>
      <p className={descriptionRules}>{gameobjectiveSecond}</p>
      <span className={subtitle}>Preparação</span>
      <p className={descriptionRules}>{gamePrepareFirst}</p>
      <p className={descriptionRules}>{gamePrepareSecond}</p>
      <p className={descriptionRules}>{gamePrepareThird}</p>
      <span className={subtitle}>Vamos jogar?</span>
      <p className={descriptionRules}>{gamePlayFirst}</p>
      <p className={descriptionRules}>{gamePlaySecond}</p>
      <p className={descriptionRules}>Fique atento com as Cartas de Ação, elas podem impactar no jogo. Veja abaixo.</p>
      <p className={infoFontStyle}>
        <span>Fonte</span>
        : Site COPAG
      </p>
    </section>
  )
}