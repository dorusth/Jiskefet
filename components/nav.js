import Link from 'next/link'

const Nav = () => (
<div>
	<nav className="indigo lighten-1">
	    <div className="nav-wrapper indigo lighten-1 container">
	      <a href="/" className="brand-logo">Jiskefet</a>
		  <ul id="nav-mobile" className="right hide-on-med-and-down">
		  	<li><a href="sass.html"><i className="material-icons">notifications</i></a></li>
		  	<li><Link href="#"><a className="dropdown-trigger" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></Link></li>
	      </ul>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><Link href="/"><a>Dashboard</a></Link></li>
	        <li><Link href="/logs"><a>Log overview</a></Link></li>
	        <li><Link href="/runs"><a>Run overview</a></Link></li>
			<li><Link href="/subsystems"><a>Subsystems overview</a></Link></li>
	      </ul>
	    </div>
 	</nav>
</div>
);

export default Nav;
