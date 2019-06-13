import Link from 'next/link'
import Main from '../layouts/main'
import BarChart from '../components/barChart'
import fetch from 'isomorphic-unfetch'

const Index = props => (
	<Main>
		<div className="container row">
			<div className="row col s6">
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">Most Recent logs</h3>
			    	<table className="highlight">
						<thead>
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Time</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Log #1</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #2</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #3</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
						</tbody>
					</table>
			    </div>
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">Failed logs</h3>
					<table className="highlight">
						<thead>
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Time</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Log #1</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #2</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #3</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
						</tbody>
					</table>
			    </div>
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">Failed tests</h3>
					<table className="highlight">
						<thead>
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Time</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Log #1</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #2</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
							<tr>
								<td>Log #3</td>
								<td>Bas Smit</td>
								<td>09:00 PM</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="col s12 z-depth-1 rounded">
					<h3 id="dataVis" className="center">Datavis</h3>
					<p>Hier komt datavis</p>
					<BarChart data={[5, 10, 1, 3]} size={[250, 250]} />
				</div>
			</div>
			<div className="row col s6">
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">New log</h3>
					<form className="col s12" action="" method="post">
							<label for="log_name">Enter a title</label>
							<input placeholder="title for log" type="text" id="log_name"></input>
					</form>
				</div>
			</div>
		</div>
	</Main>
);



Index.getInitialProps = async function() {
	const res = await fetch('http://localhost:3000/item')
	const data = await res.json()


	await Object.values(data).forEach(value => {
		console.log(value.runNumber)
		//use value here
	});

	return {
		data
	}
}
export default Index;
