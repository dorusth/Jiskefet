import Head from 'next/head'
import Nav from '../components/nav'


class Main extends React.Component {
  render() {
    return  <div>
		 <Head>
			 <title>Jiskefet</title>
			 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
			 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
			 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			 <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		 </Head>
		 <Nav></Nav>
		 {this.props.children}
		 <style global jsx>{`
			 .rounded{
				 border-radius: 5px;
			 }
	 	`}
		 </style>
	 </div>
  }
}

export default Main
