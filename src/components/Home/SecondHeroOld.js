import {Link} from 'react-router-dom'
import developer from '../../assets/developer.png'

export const SecondHero = () => {
    return(
        <div className='secondHero row align-items-center py-5'>
            <div className='developer col d-none d-sm-block'>
                <img className='fluid' src={developer} alt="sometext" />
            </div>
            <div className='secondHeroText col mx-3'>
                
                <div className="redLine"></div>

                <div className="secondHeroTitle">
                    <p className='secondHeroHeader'>Perfect Solution for any stage of your career</p>
                </div>
                
                <div className="secondHeroSubHeader">
                    <p className="secondHeroSubHeader">Pick your pace and jump right in</p>
                </div>    

                <div className="secondHeroButtons">
                    <Link to='/selfpaced' className='button secondHeroTryItNow'>Try It Now</Link>
                    <Link to='/process' className='button secondHeroCourses'>Courses</Link>
                </div>
            </div> 

            

        </div>
    )
}