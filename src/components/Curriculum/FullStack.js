import {Link} from 'react-router-dom'
import { FullStackTable } from './FullStackTable'

export const FullStack = () => {
    return(
        <div className="fullStack m-5">
            <div className="row">
                <div className="col-sm">
                    
                    <div className="redLine"></div>
                    
                <div className="fullStackText">
                    <p className="fullStackHeader">FullStack Developer Curriculum <span className='fullStackHeaderTextSmall'>12 Weeks</span></p>
                    <p className="fullStackSubHeader headerSubText">No Pre-requisites Requires</p>

                    <div className="row mt-5">
                        <div className="col-sm">
                            <p className="fullStackFlexTitle">Self Paced</p>
                            <p className="fullStackFlexSubText">NodeJs and Python</p>
                        </div>
                        <div className="col-sm">
                            <Link className='button' to='/selfpaced'>Start Now</Link>
                        </div>
                    </div>
                    <div className="row mt-5 fullStackVirtualBox">
                        <div className="col-sm">
                            <p className="fullStackFlexTitle">Virtual and <br/>Live Courses</p>
                            <p className="fullStackFlexSubText">Currently only offering NodeJS</p>
                        </div>
                        <div className="col-sm">
                            <Link className='button applyNowSecondary' to='/contact'>Apply Now</Link>
                        </div>
                    </div>
                </div>



                </div>

                <div className="col-sm">
                    <FullStackTable/>
                </div>

            </div>
            

            
        </div>
    )
}