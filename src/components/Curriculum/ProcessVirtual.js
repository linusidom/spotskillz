import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
export const ProcessVirtual = () => {
    return(
        <div className="processVirtual">
            <div className="redLineFlex">
                <div className="redLine"></div>
            </div>
            <div className="processVirtualText">
                <p className="processVirtualHeader headerText">
                    Virtual Classes 
                </p>

                <p className="processVirtualSubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium a. Maiores quibusdam facere error maxime totam deleniti ipsum commodi, labore assumenda dolor dolore neque quos architecto id. Voluptatem, quis.</p>
                <Link className="button processLearnMore" to='/curriculumvirtual'>Learn More</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped fa-check text-successtable-border border-light">
                    <thead className="border-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><strong>Self Paced</strong></th>
                        <th scope="col"><strong>Virtual Classroom<br/>FrontEnd</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Instructor Led</th>
                        <td><FontAwesomeIcon icon={faTimes} className='text-danger'/></td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                    </tr>
                    <tr>
                        <th scope="row">Course Length</th>
                        <td>Flexible</td>
                        <td>6 Weeks</td>
                    </tr>
                    <tr>
                        <th scope="row">Class Duration</th>
                        <td>Flexible</td>
                        <td>1 hour</td>
                    </tr>
                    <tr>
                        <th scope="row">Job Guarantee</th>
                        <td><FontAwesomeIcon icon={faTimes} className='text-danger'/></td>
                        <td><FontAwesomeIcon icon={faCheck} className='text-success'/></td>
                    </tr>
                    <tr>
                        <th scope="row">Cost</th>
                        <td>Free</td>
                        <td>50,000 THB</td>
                    </tr>
                    </tbody>
                </table>
            </div>


            {/* <div className="processVirtualCards row justify-content-center text-center">

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Instructor Led</p>
                </div>
             
                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Monday to Friday<br/>7pm to 8pm</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Classes 5 days per week</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">1 Hour Per Day</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">Course Cost<br/>50,000 THB</p>
                </div>

                <div className="processVirtualCard card col-3 m-3">
                    <p className="processVirtualCardText p-0 m-0">12 Weeks (60 days)</p>
                </div>
            </div> */}
        </div>
    )
}