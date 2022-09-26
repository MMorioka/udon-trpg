import { Noodles } from '../../components/noodles'
import { Soup } from '../../components/soup'
import { HowToBoil } from '../../components/howToBoil'
import { Toppings } from '../../components/toppings'
import { Seasonings } from '../../components/seasoning'

export default function udonCondition() {
  return (
    <>
      <Noodles />
      <Soup />
      <HowToBoil />
      <Toppings />
      <Seasonings />
    </>
  )
}
