import Link from 'next/link'
import Main from '../layouts/main'
import LogBar from '../components/logbar.js'


const Logs = () => (
	<Main>
		<LogBar />
		<div className="row">
			<div className="container">
				<div className="col s4 blue-grey lighten-5">
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
						<ul>
					      <li>Alvin</li>
					      <li>Alvin</li>
					      <li>Alvin</li>
					      <li>Alvin</li>
					    </ul>
					</div>
				</div>
			</div>
		</div>
	</Main>
);

export default Logs;
