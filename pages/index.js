import Link from 'next/link'
import Main from '../layouts/main'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import fetch from 'isomorphic-unfetch'
import LogForm from '../components/logForm'

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
					<h3 className="center">Most important</h3>
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
      <BarChart
        width={600}
        height={300}
		data={props.runNmbrs}
        margin={{
          top: 10, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="runNumber" />
        <YAxis dataKey="runQuality" />
        <Tooltip />
        <Legend />
        <Bar dataKey="runQuality" fill="#8884d8" />
      </BarChart>
				</div>
			</div>
			<LogForm />
		</div>
	</Main>
);

Index.getInitialProps = async function() {
	const res = await fetch('http://localhost:3000/data')
	const data = await res.json()
	let runNmbrs = []
	Object.values(data.runs).forEach(value => {
		let obj = {
			runNumber: value.runNumber,
			runQuality: value.runQuality
		}
		runNmbrs.push(obj)
	});
	return {
		runNmbrs
	}
}
export default Index;
