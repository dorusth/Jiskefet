import Link from 'next/link'

class LogBar extends React.Component{
	render(){
		return(
			<div className="row bar">
				<div className="col s12">
					<div className="container">
						{this.props.children}
						<div className="col s2 right logBar">
							<Link href="/"><a className="waves-effect waves-light right btn indigo accent-2">Add new log</a></Link>
						</div>
					</div>
				</div>
				<style jsx>{`
				.bar{
					margin-top:.5em;
				}
				.btn{
					text-transform: none;
				}
				.logBar{
					padding: 8px 0;
				}
				`}</style>
			</div>
		)
	}
}

export default LogBar;
