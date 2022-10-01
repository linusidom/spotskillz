import python from '../../assets/python.png'

export const SelfPacedPython = () => {
    return(
            <div className='python row p-5 me-0'>
                <div className="pythonImage col-sm">
                    
                    <img className='fluid' src={python} alt="sometext" />
                    
                </div>
                <div className="pythonText col-sm">
                    <div className="redLine"></div>
                    
                        <p className="pythonHeader headerText">Python<br/>Full Stack Developer</p>
                        <ul>
                            <li>Learn the most versatile programming language</li>
                            <li>Build out Full Scale Web Applications</li>
                            <li>Create API's and manage databases</li>
                        </ul>
                        <a className='button link' href='https://www.youtube.com/watch?v=_cDm9_-mj-s&list=PLA_Vc1i8J5NL7JvqvZs6CtXvJ19EmnNzv' target='_blank' rel="noreferrer">Start Now</a>
                </div>
               
            </div>
    )
}