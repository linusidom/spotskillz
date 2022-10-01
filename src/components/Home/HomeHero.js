import {Link} from 'react-router-dom'
import heroImage from '../../assets/heroImage.png'

export const HomeHero = () => {
    return(
        
            <div className='hero row align-items-center me-0'>
                <div className='heroText col-sm'>
                    
                    <div className="redLine"></div>

                    <div className="heroTitle">
                        <p className='heroHeader'>Your Coding Roadmap to Freedom</p>
                    </div>
                    
                    <div className="heroSubHeader">
                        <p className="heroSubHeader">Start Learning Now</p>
                    </div>    

                    <div className="heroButtons">
                        <Link to='/contact' className='button applyNowPrimary me-3'>Apply Now</Link>
                        <Link to='/curriculum' className='button buttonCourses'>Courses</Link>
                    </div>
                </div> 

                <div className='heroImage col-sm'>
                    <div className="image">
                        <img className='fluid homeHeroImage' src={heroImage} alt="sometext" />
                    </div>
                </div>

            </div>
 
    )
}