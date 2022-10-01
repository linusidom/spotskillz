import {Link} from 'react-router-dom'
import selfPacedImage from '../../assets/selfPacedImage.jpeg'
export const SelfPacedHero = () => {
    return(
        
            <div className='hero row align-items-center justify-content-evenly me-0'>
                <div className='heroText col-sm'>
                    
                    <div className="redLine"></div>

                    <div className="heroTitle">
                        <p className='heroHeader'>Where do you want to go today?</p>
                    </div>
                    
                    <div className="heroSubHeader">
                        <p className="heroSubHeader">The right course at the right time</p>
                    </div>    

                    <div className="heroButtons">
                        <Link to='/contact' className='button applyNowPrimary me-3'>Apply Now</Link>
                        <Link to='/curriculum' className='button buttonCourses'>Courses</Link>
                    </div>
                </div> 
                <div className='heroImage col-sm'>
                    <div className="image">
                        <img className='fluid seflPacedHeroImage' src={selfPacedImage} alt="sometext" />
                    </div>
                </div>

            </div>
 
    )
}