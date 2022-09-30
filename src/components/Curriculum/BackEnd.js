import {Link} from 'react-router-dom'
import { BackEndTable } from './BackEndTable'

export const BackEnd = () => {
    return(
        <div className="backEnd p-5">
            <div className="row">
                <div className="col-sm">
                    
                    <div className="redLine"></div>
                    
                    <div className="backEndText mt-3">
                        <p className="backEndHeader">BackEnd Curriculum <span className='backEndHeaderTextSmall'>6 Weeks</span></p>
                        <p className="backEndSubHeader headerSubText">No Pre-requisites Requires</p>

                        <div className="row mt-5">
                            <div className="col-sm">
                                <p className="backEndFlexTitle">Self Paced</p>
                                <p className="backEndFlexSubText">NodeJs and Python</p>
                            </div>
                            <div className="col-sm">
                                <Link className='button' to='/selfpaced'>Start Now</Link>
                            </div>
                        </div>
                        <div className="row mt-5 backEndVirtualBox">
                            <div className="col-sm">
                                <p className="backEndFlexTitle">Virtual and <br/>Live Courses</p>
                                <p className="backEndFlexSubText">Currently only offering NodeJS</p>
                            </div>
                            <div className="col-sm">
                                <Link className='button applyNowSecondary' to='/contact'>Apply Now</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-sm">
                    <BackEndTable/>
                </div>

            </div>
        </div>
    )
}