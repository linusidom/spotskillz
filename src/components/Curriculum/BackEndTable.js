export const BackEndTable = () => {
    return(
        <div className="backEndTable">
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
                        <td>Node Express and API Intro</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 2</th>
                        <td>Days 6-10</td>
                        <td>NoSQL with MongoDB</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 3</th>
                        <td>Days 11-15</td>
                        <td>Blog App</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 4</th>
                        <td>Day 16-20</td>
                        <td>Ecommerce Site</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 5</th>
                        <td>Day 21-25</td>
                        <td>Docker and AWS</td>
                    </tr>
                    <tr>
                        <th scope="row">Week 6</th>
                        <td>Day 26-30</td>
                        <td>Project Portfolio</td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}