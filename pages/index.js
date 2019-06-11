import Link from 'next/link'
import Main from '../layouts/main'
// links work with everything

const Index = () => (
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

export default Index;
