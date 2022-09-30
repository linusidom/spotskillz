import node from '../../assets/node.png'

export const SelfPacedNode = () => {
    return(
        
        <div className='node row p-5'>
        
            <div className="nodeImage col-sm">
                <a className='imageLink' href='https://www.youtube.com/watch?v=NPu97NcZpMA&list=PLA_Vc1i8J5NKpMca85O13d8vXd1Vm9Q9G' target='_blank' rel="noreferrer">
                    <img className='fluid' src={node} alt="sometext" />
                </a>
            </div>
        
            <div className="nodeText col-sm">
                
                <div className="redLine"></div>
                <a className='link' href='https://www.youtube.com/watch?v=NPu97NcZpMA&list=PLA_Vc1i8J5NKpMca85O13d8vXd1Vm9Q9G' target='_blank' rel="noreferrer">
                    <p className="nodeHeader headerText">Node JS<br/>Full Stack Developer</p>
                    <ul>
                    
                            <li>Learn the Web's most popular Framework</li>
                            <li>Understand the fundamentals of Programming</li>
                            <li>Build out Full Scale Applications with ease</li>
                        
                    </ul>
                </a>
            </div>
            
        </div>
    
    )
}