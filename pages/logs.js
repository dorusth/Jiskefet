import Main from '../layouts/main'
import LogBar from '../components/logs/logbar.js'
import LogPreview from '../components/logs/logPreview/logPreview.js'
import LogOverview from '../components/logs/logOverview'

class Logs extends React.Component {
	constructor(props){
		super(props)

	}
	
	render(){
		return(
			<Main>
				<LogBar />
				<div className="row">
					<div className="container">
						<LogPreview />
						<LogOverview />
					</div>
				</div>
				<style jsx>{`
					.ulBullet > li{
						list-style: disc inside;
					}
				`}</style>
			</Main>
		)
	}
}


export default Logs;
