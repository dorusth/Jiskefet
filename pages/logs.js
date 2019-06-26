import Main from '../layouts/main'
import LogBar from '../components/logs/logbar.js'
import LogPreview from '../components/logs/logPreview/logPreview.js'
import LogOverview from '../components/logs/logOverview'
import fetch from 'isomorphic-unfetch'
import data from '../components/logs/fakeLogs'

class Logs extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			selectedLog: 1,
			previewLog: false,
			currentPreview: {
					"logId": "-",
					"subtype": "-",
					"origin": "-",
					"creationTime": "-",
					"title": "Log preview",
					"body": "Log body",
					"subsystemFkSubsystemId": null,
					"announcementValidUntil": null,
					"commentFkParentLogId": 1,
					"commentFkRootLogId": 1,
					"runs": "Connected runs",
					"user": {
							"userId": "-",
							"externalUserId": "-",
							"samsId": "-"
					}
				}
		}

		this.handleSelectedLog = this.handleSelectedLog.bind(this)
	}

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

	async setCurrentPreview(){
		const res = await fetch('http://localhost:3000/data',{
			headers:{
				"Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG9jYWxUZXN0VG9rZW4iLCJpYXQiOjE1NTk1NjQ3ODAsImV4cCI6MTU5MTEwMDc4MH0.8j1NowO7zSRkRraUUiqaeVYsS9tAq7LVZOtLfQqbxc0"
			}
		})
		const currentPreview = await res.json()
		this.setState({
			currentPreview: currentPreview.logs[this.state.selectedLog]
		})
	}

	handleSelectedLog(e){
		this.setState({
			selectedLog: +e.currentTarget.id
		}, () => {
			this.setCurrentPreview()
		})
	}

	render(){
		return(
			<Main logs="active">
				<LogBar />
				<div className="row">
						<LogOverview data={this.props.data} handleSelectedLog={this.handleSelectedLog} />
						<LogPreview selectedLog={this.state.selectedLog} data={this.state.currentPreview} />
				</div>
				<style jsx>{`
					.active{
						border-bottom: 3px solid;
					}
					.ulBullet > li{
						list-style: disc inside;
					}
				`}</style>
				<style global jsx>{`
				.tab .active{
					border-bottom: 3px solid;
				}
				`}</style>
			</Main>
		)
	}
}



export default Logs;