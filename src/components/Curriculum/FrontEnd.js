import {Link} from 'react-router-dom'
import { FrontEndTable } from './FrontEndTable'

export const FrontEnd = () => {
    return(
        <div className="frontEnd m-5">
            <div className="row">
                <div className="col-sm">
                    
                    <div className="redLine"></div>
                    
                <div className="frontEndText mt-3">
                    <p className="frontEndHeader">FrontEnd Curriculum <span className='frontEndHeaderTextSmall'>6 Weeks</span></p>
                    <p className="frontEndSubHeader headerSubText">No Pre-requisites Requires</p>

                    <div className="row mt-5">
                        <div className="col-sm">
                            <p className="frontEndFlexTitle">Self Paced</p>
                            <p className="frontEndFlexSubText">NodeJs and Python</p>
                        </div>
                        <div className="col-sm">
                            <Link className='button' to='/selfpaced'>Start Now</Link>
                        </div>
                    </div>
                    <div className="row mt-5 frontEndVirtualBox">
                        <div className="col-sm">
                            <p className="frontEndFlexTitle">Virtual and <br/>Live Courses</p>
                            <p className="frontEndFlexSubText">Currently only offering NodeJS</p>
                        </div>
                        <div className="col-sm">
                            <Link className='button applyNowSecondary' to='/contact'>Apply Now</Link>
                        </div>
                    </div>
                </div>



                </div>

                <div className="col-sm">
                    <FrontEndTable/>
                </div>

            </div>
            

            
        </div>
    )
}