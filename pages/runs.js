import Main from '../layouts/main'
import LogBar from '../components/logs/logbar.js'
import fetch from 'isomorphic-unfetch'
var moment = require('moment');

class Runs extends React.Component{

    static async getInitialProps() {
		const res = await fetch('http://localhost:3000/data',{
			headers:{
				"Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG9jYWxUZXN0VG9rZW4iLCJpYXQiOjE1NTk1NjQ3ODAsImV4cCI6MTU5MTEwMDc4MH0.8j1NowO7zSRkRraUUiqaeVYsS9tAq7LVZOtLfQqbxc0"
			}
		})
		const data = await res.json()
		return{
                data
		}
	}

    render(){
        return(
            <Main>
                <LogBar/>
                <div className="container">
                    <table>
                        <thead className="white-text indigo lighten-3 container">
                            <tr>
                                <th>Run number</th>
                                <th>Time trg start</th>
                                <th>Time trg end</th>
                                <th>Logs</th>
                                <th>Log quality</th>
                                <th>Run Type</th>
                                <th>Detectors</th>
                                <th>time o2 start</th>
                                <th>time o2 end</th>
                                <th>ID</th>
                                <th>FLP's</th>
                            </tr>
                        </thead>
                        <tbody className="container">
                        {/* if the api works {this.props.data.data.item.map((run, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{run.runNumber}</td>
                                    <td>{moment(run.TrgStartTime).format('YYYY-MM-D')}<br/>{moment(run.TrgStartTime).format('HH:mm:ss ')}</td>
                                    <td>{run.TrgEndTime}</td>
                                    <td>{Math.floor(Math.random() * 6)}</td>
                                    <td>{run.runQuality}</td>
                                    <td>{run.runType}</td>
                                    <td>{run.nDetectors}</td>
                                    <td>{moment(run.O2StartTime).format('YYYY-MM-D')}<br/>{moment(run.O2StartTime).format('HH:mm:ss ')}</td>
                                    <td>{run.O2EndTime}</td>
                                    <td>{run.activityId}</td>
                                    <td>{run.nFlps}</td>
                                </tr>
                            )
                        })} */}
                        {this.props.data.runs.map((run, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{run.runNumber}</td>
                                    <td>{moment(run.TrgStartTime).format('YYYY-MM-D')}<br/>{moment(run.TrgStartTime).format('HH:mm:ss ')}</td>
                                    <td>{moment(run.TrgEndTime).format('YYYY-MM-D')}<br/>{moment(run.TrgEndTime).format('HH:mm:ss ')}</td>
                                    <td>{Math.floor(Math.random() * 6)}</td>
                                    <td>{run.runQuality}</td>
                                    <td>{run.runType}</td>
                                    <td>{run.nDetectors}</td>
                                    <td>{moment(run.O2StartTime).format('YYYY-MM-D')}<br/>{moment(run.O2StartTime).format('HH:mm:ss ')}</td>
                                    <td>{moment(run.O2EndTime).format('YYYY-MM-D')}<br/>{moment(run.O2EndTime).format('HH:mm:ss ')}</td>
                                    <td>{run.activityId}</td>
                                    <td>{run.nFlps}</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>
            <style jsx>{`
                th{
                    font-weight: 100;
                    border-radius:0;
                }

            `}</style>
            </Main>
        )
    }
}

export default Runs