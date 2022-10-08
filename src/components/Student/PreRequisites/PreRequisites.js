
import { BasicReq } from './BasicReq';
import { NodeReq } from './NodeReq';
import { PythonReq } from './PythonReq';



export const PreRequisites = () => {
    return (
        <div className='contentDiv notes'>
            
            <BasicReq/>
            
            <PythonReq/>

            <NodeReq/>

        </div>
    )
}