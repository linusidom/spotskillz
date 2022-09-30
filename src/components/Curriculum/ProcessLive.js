export const ProcessLive = () => {
    return(
        <div className="processLive">
            <div className="redLine"></div>

            <div className="processLiveText">
                <p className="processLiveHeader headerText">
                    Live Classes
                </p>

                <p className="processLiveSubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium a. Maiores quibusdam facere error maxime totam deleniti ipsum commodi, labore assumenda dolor dolore neque quos architecto id. Voluptatem, quis.</p>
                <button className="button processLiveLearnMore">Learn More</button>
            </div>

            <div className="processLiveCards row justify-content-center text-center">

                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">Instructor Led</p>
                </div>
             
                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">Monday to Friday<br/>7pm to 8pm</p>
                </div>

                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">Classes 5 days per week</p>
                </div>

                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">1 Hour Per Day</p>
                </div>

                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">Course Cost<br/>100,000 THB</p>
                </div>

                <div className="processLiveCard card col-3 m-3">
                    <p className="processLiveCardText p-0 m-0">12 Weeks (60 days)</p>
                </div>
            </div>
        </div>
    )
}