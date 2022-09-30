import python from '../../assets/python.png'

export const SelfPacedPython = () => {
    return(
            <div className='python row p-5'>
                <div className="pythonImage col-sm">
                    <a className='imageLink' href='https://www.youtube.com/watch?v=_cDm9_-mj-s&list=PLA_Vc1i8J5NL7JvqvZs6CtXvJ19EmnNzv' target='_blank' rel="noreferrer">
                        <img className='fluid' src={python} alt="sometext" />
                    </a>
                </div>
                <div className="pythonText col-sm">
                    <div className="redLine"></div>
                    <a className='link' href='https://www.youtube.com/watch?v=_cDm9_-mj-s&list=PLA_Vc1i8J5NL7JvqvZs6CtXvJ19EmnNzv' target='_blank' rel="noreferrer">
                        <p className="pythonHeader headerText">Python<br/>Full Stack Developer</p>
                        <ul>
                            <li>Learn the most versatile programming language</li>
                            <li>Build out Full Scale Web Applications</li>
                            <li>Create API's and manage databases</li>
                        </ul>
                    </a>
                </div>
               
            </div>
    )
}