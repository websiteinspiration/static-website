import { Container } from 'unstated'

export default class CurrencyContainer extends Container {
  state = {
    active: '$',
  }

  switch(newCurrnecy) {
    this.setState({ active: newCurrnecy })
  }
}
