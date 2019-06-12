import Link from 'next/link'
import Main from '../layouts/main'
import LogBar from '../components/logs/logbar.js'
import PreviewTabs from '../components/logs/previewTabs'

class Logs extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			CurrentTab:3,
			tabs: [
				{
					name:"content",
					count: 0
				},
				{
					name:"runs",
					count: 1
				},
				{
					name:"files",
					count: 2
				},
				{
					name:"other",
					count: 3
				}
			]
		}
	}

	updateCurrent = (e) => {
		this.setState({CurrentTab: e.target.id})
		console.log(this.state.CurrentTab)
	}

	checkActive(itemCount){
		if(itemCount === this.state.CurrentTab){
				return "Active "
		}else{
				return "inactive "
		}
}
	
	render(){
		return(
			<Main>
				<LogBar />
				<div className="row">
					<div className="container">
						<div className=" container col s4 blue-grey lighten-5">
							<h2>Run preview</h2>
							<p>
									<label>
										<input type="checkbox" />
										<span>Log is key log</span>
									</label>
								</p>
							<div className="row">
								<Link href="#"><a className="col s4 offset-s1 waves-effect waves-light btn">Place comment</a></Link>
								<Link href="#"><a className="col s4 offset-s2 waves-effect waves-light btn">Link to run</a></Link>
							</div>
							<div>
								<ul className="ulBullet">
										<li>Alvin: <b>value</b></li>
										<li>Alvin: <b>value</b></li>
										<li>Alvin: <b>value</b></li>
										<li>Alvin: <b>value</b></li>
									</ul>
							</div>
							

							<div className="row">
								<div className="col s12">
									<ul className="tabs">
										<li className="tab col s3"><a className="active" href="#test2" id="0" onClick={this.updateCurrent}>Content</a></li>
										<li className="tab col s3"><a href="#test1" id="1" onClick={this.updateCurrent}>Runs</a></li>
										<li className="tab col s3"><a href="#test1" id="2" onClick={this.updateCurrent}>Files</a></li>
										<li className="tab col s3"><a href="#test1" id="3" onClick={this.updateCurrent}>Content</a></li>
									</ul>
								</div>
								{this.state.tabs.map((tab, key)=>{
									return(
										<PreviewTabs key={key} tab={tab.name} active={this.checkActive(tab.count)} count={tab.count} />
									)
								})}
							</div>


						</div>
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
