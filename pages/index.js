import Link from 'next/link'
import Main from '../layouts/main'
// links work with everything

const Index = () => (
	<Main>
		<div className="container row">
			<div className="row col s6">
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">Recent logs</h3>
			    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula justo, tincidunt quis tortor sed, eleifend tempor lorem. Suspendisse tincidunt maximus viverra. Donec commodo pulvinar tortor ac finibus. Aliquam quam mi, egestas non urna eget, pretium cursus purus. Proin facilisis elit id ex sodales dignissim. Etiam volutpat quis eros id tristique. Maecenas nisi dolor, consectetur sed laoreet sed, suscipit non mi. In ornare interdum pulvinar. Aliquam lacus ligula, lacinia vitae semper id, aliquam sit amet quam.</p>
			    </div>
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">Failed logs</h3>
			    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula justo, tincidunt quis tortor sed, eleifend tempor lorem. Suspendisse tincidunt maximus viverra. Donec commodo pulvinar tortor ac finibus. Aliquam quam mi, egestas non urna eget, pretium cursus purus. Proin facilisis elit id ex sodales dignissim. Etiam volutpat quis eros id tristique. Maecenas nisi dolor, consectetur sed laoreet sed, suscipit non mi. In ornare interdum pulvinar. Aliquam lacus ligula, lacinia vitae semper id, aliquam sit amet quam.</p>
			    </div>
			</div>
			<div className="row col s6">
				<div className="col s12 z-depth-1 rounded">
					<h3 className="center">New log</h3>
			    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula justo, tincidunt quis tortor sed, eleifend tempor lorem. Suspendisse tincidunt maximus viverra. Donec commodo pulvinar tortor ac finibus. Aliquam quam mi, egestas non urna eget, pretium cursus purus. Proin facilisis elit id ex sodales dignissim. Etiam volutpat quis eros id tristique. Maecenas nisi dolor, consectetur sed laoreet sed, suscipit non mi. In ornare interdum pulvinar. Aliquam lacus ligula, lacinia vitae semper id, aliquam sit amet quam.</p>
				</div>
			</div>
		</div>
	</Main>
);

export default Index;
