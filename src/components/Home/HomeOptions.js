import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export const HomeOptions = () => {
    return (
        <div className="homeOptions contentDiv">
            <div className="redLineFlex">
                <div className="redLine"></div>
            </div>

            <div className="homeOptionsText">
                <p className="homeOptionsHeader headerText">
                    Pick the path that works for you
                </p>

                <p className="homeOptionsSubHeader hideOnSmall contentSubHeader">There are many options to choose from, such as a Self Paced course that offers you the most flexibility, to Instructor Led courses that allow you to be part of the virtual classroom experience</p>
                {/* <Link to='/process' className="button homeOptionsLearnMore">Learn More</Link> */}
            </div>
            <div className="table-responsive homeOptionsTable">
                <table className="table table-striped table-border border-light">
                    <thead className="border-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Self Paced Course</th>
                        <th scope="col">Virtual Classroom<br/>FrontEnd OR Backend</th>
                        <th scope="col">Virtual Classroom<br/>Full Stack</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Instructor Led</th>
                        <td>-</td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                    </tr>
                    <tr>
                        <th scope="row">Course Length</th>
                        <td>-</td>
                        <td>6 Weeks</td>
                        <td>12 Weeks</td>
                    </tr>
                    <tr>
                        <th scope="row">Class Duration</th>
                        <td>-</td>
                        <td>1 hour</td>
                        <td>1 hour</td>
                    </tr>
                    <tr>
                        <th scope="row">Class Format</th>
                        <td>-</td>
                        <td>Zoom</td>
                        <td>Zoom</td>
                    </tr>
                    <tr>
                        <th scope="row">Job Guarantee</th>
                        <td>-</td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                    </tr>
                    <tr>
                        <th scope="row">Cost</th>
                        <td>Free</td>
                        <td>50,000 THB</td>
                        <td>75,000 THB</td>
                    </tr>
                    <tr>
                        <th scope="row">Cost</th>
                        <td><Link className='button tableButton tableButtonColor' to='/selfpaced'>Start Now</Link></td>
                        <td><Link className='button tableButton applyNowPrimary' to='/contact'>Apply Now</Link></td>
                        <td><Link className='button tableButton applyNowSecondary' to='/contact'>Apply Now</Link></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}