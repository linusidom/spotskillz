import { Link } from 'react-router-dom'
import process from '../../assets/process.png'

export const CurriculumHero = () => {
    return (
        <div className='curriculum row align-items-center me-0'>
            <div className='curriculumText col-sm'>
                
                <div className="redLine"></div>

                <div className="curriculumTitle">
                    <p className='curriculumHeader heroHeader'>Course Curriculum and<br/> Application Process</p>
                </div>
                
                <div className="curriculumSubHeader">
                    <p className="curriculumSubHeader">4 Simple Steps to get you on the right track</p>
                </div>    

                <div className="curriculumButtons">
                    <Link to='/contact' className='button applyNowPrimary me-3'>Apply Now</Link>
                    <Link to='/curriculum' className='button buttonCourses'>Courses</Link>
                </div>
            </div> 

            <div className='curriculumImage col-sm'>
                <div className="image">
                    <img className='fluid curriculumHeroImage' src={process} alt="sometext" />
                </div>
            </div>

        </div>

    )
}