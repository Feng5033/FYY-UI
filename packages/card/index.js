import Card from './src/card'

Card.install = (Vue) => {
  Vue.component(Card.name, Card)
}

export default Card
