
export const FrontEndTable = () => {
    return(
        <div className="frontEndTable">
            <div className="table-responsive homeOptionsTable">
                <table className="table table-striped fa-check text-successtable-border border-light">
                    <thead className="border-light">
                    <tr>
                        <th scope="col">Week</th>
                        <th scope="col">Day</th>
                        <th scope="col">Topic</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Week 1</th>
                        <td>Days 1-5</td>
                        <td>Course Intro, HTML and CSS</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 2</th>
                        <td>Days 6-10</td>
                        <td>Responsive Design</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 3</th>
                        <td>Days 11-15</td>
                        <td>JavaScript and OOP</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 4</th>
                        <td>Day 16-20</td>
                        <td>ReactJS and Routing</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 5</th>
                        <td>Day 21-25</td>
                        <td>Promises and Redux</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 6</th>
                        <td>Day 26-30</td>
                        <td>Project</td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}