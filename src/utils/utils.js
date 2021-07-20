import changer from '../assets/changer.png'
import pickFour from '../assets/pick-four.png'
import pickTwo from '../assets/pick-two.png'
import reverse from '../assets/reverse.png'
import skip from '../assets/skip.png'

export const homeTextFirst = 'E assim como ele, a história de seu surgimento é bem interessante.'
export const homeTextSecond = 'Em 1971, Merle Robbins e seu filho Ray jogavam Oito Maluco como faziam normalmente. Merle não andava satisfeito com as regras do jogo, que sempre traziam conflitos à família. Ele queria jogar de uma forma diferente e decidiu modificar as regras do Oito Maluco criando um novo baralho colorido. E foi aí que nasceu o UNO!'

export const gameobjective = 'Seja o primeiro jogador a se livrar de todas as suas cartas em cada rodada e ganhe pontos pelas cartas que sobram em poder dos seus adversários. Os pontos de cada rodada vão sendo acumulados e o primeiro jogador a fazer 500 pontos será o vencedor.'
export const gameobjectiveSecond = 'O jogo é composto com cartas de cor Azuis, Verdes, Amarelas e Vermelhas. Cada cor possui 19 Cartas de 0 a 9. É composto também de Cartas de Ação, as que em breve entraremos em detalhe.'

export const gamePrepareFirst = 'O jogador que estiver distribuindo as cartas embaralha e distribui 7 cartas para cada um.'
export const gamePrepareSecond = 'As cartas restantes devem ser colocadas viradas para baixo, formando a pilha de Compras.'
export const gamePrepareThird = 'A carta superior da pilha de Compras é virada para formar uma pilha de Descarte.'

export const gamePlayFirst = 'O jogador à esquerda de quem estiver distribuindo as cartas começa o jogo, e o jogo deverá seguir em sentido horário. Na sua vez, você deve combinar uma carta da sua mão com aquela no alto da pilha de Descarte, seja por número, cor ou símbolo.'
export const gamePlaySecond = 'Exemplo: Se a carta na pilha de Descarte for um 7 Azul, o jogador deve jogar uma carta Azul de qualquer número, ou um número 7 de qualquer cor. Se o jogador não tiver uma carta que combine, deve comprar uma na pilha de Compras. Se a nova carta servir, ele pode jogá-la na mesma rodada. Caso contrário, passará a vez para o próximo jogador. O jogador não pode jogar uma carta que já estava na sua mão antes de fazer a compra.'

export const cards = [
  { name: 'Inversão de sentido', image: reverse, description: 'Esta carta troca o sentido do jogo. Esta carta só pode ser jogada caso esteja na mesa uma carta com a mesma cor ou com um símbolo igual.' },
  { name: 'Troca de cor', image: changer, description: 'Esta carta tem como objetivo alterar a cor que está a ser jogada no momento. Pode ser jogada a qualquer altura do jogo e por cima de qualquer carta em cima da mesa.' },
  { name: 'Pular', image: skip, description: 'Esta carta interdita o jogador seguinte de jogar. Esta carta só pode ser jogada caso esteja na mesa uma carta com a mesma cor ou com um símbolo igual.' },
  { name: 'Coringa e + 4', image: pickFour, description: 'Pode ser jogada a qualquer altura e por cima de qualquer carta e tem a tripla função de alterar a cor que está a ser jogada no momento, de interditar o jogador seguinte de jogar e de o obrigar a retirar quatro cartas da pilha.' },
  { name: 'Carta + 2', image: pickTwo, description: 'Esta carta obriga a que o jogador seguinte tire mais duas cartas e perca a vez de jogar.' },
]