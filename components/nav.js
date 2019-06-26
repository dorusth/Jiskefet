import Link from 'next/link'

class Nav extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		// this.setPage()
		// console.log(this.state)
		return(
			<div>
				<nav className="indigo lighten-1">
						<div className="nav-wrapper indigo lighten-1 container">
							<a href="/" className={"brand-logo"}>Jiskefet</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#"><i className="material-icons">notifications</i></a></li>
							<li><Link href="#"><a className="dropdown-trigger" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></Link></li>
							</ul>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li className={this.props.dashboard}><Link href="/"><a>Dashboard</a></Link></li>
								<li className={this.props.logs}><Link href="/logs"><a>Log overview</a></Link></li>
								<li className={this.props.runs}><Link href="/runs"><a>Run overview</a></Link></li>
								<li className={this.props.sub}><Link href="#"><a>Subsystems overview</a></Link></li>
							</ul>
						</div>
				 </nav>
			</div>
			)
	}
}

export default Nav;
