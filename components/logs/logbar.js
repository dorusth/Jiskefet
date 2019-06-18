import Link from 'next/link'


const LogBar = () => (
	<div className="row">
    	<div className="col s12 indigo lighten-5">
			<div className="container">
				<div className="col s2 right logBar">
					<Link href="/"><a className="waves-effect waves-light right btn">Add new log</a></Link>
				</div>
			</div>
		</div>
		<style jsx>{`
			.logBar{
				padding: 8px 0;
			}
		`}</style>
	</div>
);

export default LogBar;
