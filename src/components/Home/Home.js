import {HomeHero} from './HomeHero'
import { HomeOptions } from './HomeOptions'
import { SecondHero } from './SecondHero'

export const Home = () => {
    return(
        <div className='home'>
            <HomeHero/>
            <HomeOptions/>
            <SecondHero/>
        </div>
    )
}