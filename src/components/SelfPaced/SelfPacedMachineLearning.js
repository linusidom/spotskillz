import ml from '../../assets/ml.jpeg'

export const SelfPacedMachineLearning = () => {
    return(
        <div className='ml row p-5 me-0'>
            <div className="mlImage col-sm">
                <img className='fluid' src={ml} alt="sometext" />
            </div>

            <div className="mlText col-sm">
                <div className="redLine"></div>
                
                    <p className="mlHeader headerText">ML and Data Sciences with Python</p>
                    <ul>
                        <li>Learn how to predict data</li>

                        <li>Train models to use in other applications</li>

                        <li>Leverage Pre-existing Models and customize them</li>
                    </ul>
                    <a className='button link buttonColorSecondary' href='https://www.youtube.com/watch?v=-rcDUSeQw_M&list=PLA_Vc1i8J5NIhUNds8S7bA2c_HsJbQ7gh' target='_blank' rel="noreferrer">Start now</a>
            </div>
        </div>

    )
}