import {Link} from 'react-router-dom'
import developer from '../../assets/developer.png'

export const SecondHero = () => {
    return(
        <div className='hero secondHero row align-items-center py-5 me-0'>
            <div className='developer col d-none d-sm-block'>
                <img className='fluid' src={developer} alt="sometext" />
            </div>
            <div className='secondHeroText col mx-3'>
                
                <div className="redLine"></div>

                <div className="secondHeroTitle">
                    <p className='secondHeroHeader heroHeader'>Perfect Solution for any stage of your career</p>
                </div>
                
                <div className="secondHeroSubHeader">
                    <p className="secondHeroSubHeader heroSubHeader">Pick your pace and jump right in</p>
                </div>    

                <div className="secondHeroButtons">
                    <Link to='/contact' className='button applyNowPrimary me-3'>Apply Now</Link>
                    <Link to='/curriculum' className='button buttonCourses'>Courses</Link>
                </div>
            </div> 

            

        </div>
    )
}