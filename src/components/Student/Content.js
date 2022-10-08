import {Link} from 'react-router-dom'

export const StudentContent = () => {
    return (
        <div className="studentContent contentDiv">
            <div className="redLineFlex">
                <div className="redLine"></div>
            </div>

            <div className="studentContentText">
                <p className="studentContentHeader headerText">
                    Content
                </p>

                <p className="studentContentSubHeader hideOnSmall contentSubHeader">Notes and Resources for each course can be found here.</p>
                {/* <Link to='/process' className="button studentContentLearnMore">Learn More</Link> */}
            </div>

            <div className="contentCard">
                <Link className='link' to='/student/prerequisites'>
                    <p>Pre-Requisites</p>
                </Link>
            </div>
            <div className="contentCard mt-4">
                <Link className='link' to='/student/javascriptnotes'>
                    <p>JavaScript</p>
                </Link>
                
            </div>
            <div className="contentCard mt-4">
                <Link className='link' to='/student/pythonnotes'>
                    <p>Python</p>
                </Link>
            </div>
            <div className="contentCard mt-4">
                <Link className='link' to='/student/frontendnotes'>
                    <p>FrontEnd</p>
                </Link>
            </div>
        </div>
    )
}