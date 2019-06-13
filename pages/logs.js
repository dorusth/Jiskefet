import Main from '../layouts/main'
import LogBar from '../components/logs/logbar.js'
import LogPreview from '../components/logs/logPreview/logPreview.js'
import LogOverview from '../components/logs/logOverview'
import fetch from 'isomorphic-unfetch'
import data from '../components/logs/fakeLogs'

class Logs extends React.Component {
	constructor(props){
		super(props)
		}
		
		static async getInitialProps() {
			
			// const res = await fetch('http://localhost:3000/logs',{
			// 	headers:{
			// 		"Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibG9jYWxUZXN0VG9rZW4iLCJpYXQiOjE1NTk1NjQ3ODAsImV4cCI6MTU5MTEwMDc4MH0.8j1NowO7zSRkRraUUiqaeVYsS9tAq7LVZOtLfQqbxc0"
			// 	}
			// })
			//const data = await res.json()

			return{
				data
			}
		}

	render(){
		return(
			<Main>
				<LogBar />
				<div className="row">
						<LogPreview />
						<LogOverview logs={this.props.data}/>
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