import {Link} from 'react-router-dom'

export const SelfPacedHero = () => {
    return(
        
            <div className='hero row align-items-center justify-content-evenly'>
                <div className='heroText col'>
                    
                    <div className="redLine"></div>

                    <div className="heroTitle">
                        <p className='heroHeader'>Start Learning Now</p>
                    </div>
                    
                    <div className="heroSubHeader">
                        <p className="heroSubHeader">Your Coding Roadmap to Freedom</p>
                    </div>    

                    <div className="heroButtons">
                        <Link to='/contact' className='button applyNowPrimary me-3'>Apply Now</Link>
                        <Link to='/curriculum' className='button buttonCourses'>Courses</Link>
                    </div>
                </div> 

            </div>
 
    )
}