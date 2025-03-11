import Image from 'next/image'
import Hero from './view/hero';
import Promotions from './view/Promotions';
import { Carousel} from './view/Carousel'



export default function Home() {
  return (
    <div>

    <Hero/>

    <Promotions/>

    <Carousel/>

    </div>
  
  )
}
