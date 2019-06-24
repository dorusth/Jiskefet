import fetch from 'isomorphic-unfetch'
import data from '../fakeLogs.js'

class LogOverview extends React.Component{
    constructor(props){
        super(props)

        this.state = {
			CurrentTab:0,
			tabs: [
				{
					name:"All",
					count: 0
				},
				{
					name:"Succes",
					count: 1
				},
				{
					name:"Failed",
					count: 2
				},
				{
					name:"Movement digital",
					count: 4
				},
				{
					name:"Installation",
					count: 5
				},
				{
					name:"Movement physical",
					count: 6
				},
			]
        }
    }

    updateCurrent = (e) => {
        this.setState({CurrentTab: +e.currentTarget.id})
        e.currentTarget.className += " active"
        console.log(this.state.CurrentTab)
    }

    checkActive(itemCount){
        if(itemCount === this.state.CurrentTab){
                return "active "
        }else{
                return "inactive "
        }
    }

    Tab = (props) =>{
        return(
            <li className="tab col s2"><a href="#" id={props.count} className={props.active} onClick={this.updateCurrent}>{props.name}</a></li>
        )
    }

    render(){ 
        return(
            <div className="col s8 container">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs z-depth-1">
                            {this.state.tabs.map((tab, key)=>{
                                return(
                                    <this.Tab count={tab.count} active={this.checkActive(tab.count)} name={tab.name} key={key}/>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="container">
                        {/* {this.props.data.data.items.map((log,key)=>{
                            return(
                                <div className="col s12 blue-grey lighten-5 logTile valign-wrapper" key={key} id={log.logId} onClick={this.props.handleSelectedLog}>
                                    <p className="id black t-white" key={key}>{log.logId}</p>
                                    <p className="col s7 offset-s1">{log.title}</p>
                                    <div className="logger col s2 center">
                                        <p>{log.user.userId}</p>
                                        <p className="grey darken-2 t-white">{log.origin}</p>
                                    </div>
                                    <div className="logger col s2 center">
                                        <p>5 min</p>
                                        <p className="grey darken-2 t-white">{log.subtype}</p>
                                    </div>
                                </div>
                            )
                        })} */}
                        {this.props.data.logs.map((log,key)=>{
                            return(
                                <div className="col s12 blue-grey lighten-5 logTile valign-wrapper" key={key} id={log.logId} onClick={this.props.handleSelectedLog}>
                                    <p className="id black t-white" key={key}>{log.logId}</p>
                                    <p className="col s7 offset-s1">{log.title}</p>
                                    <div className="logger col s2 center">
                                        <p>{log.user.userId}</p>
                                        <p className="grey darken-2 t-white">{log.origin}</p>
                                    </div>
                                    <div className="logger col s2 center">
                                        <p>5 min</p>
                                        <p className="grey darken-2 t-white">{log.subtype}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .logTile{
                        margin: 1.2em 0 .8em;
                        position: relative;
                    }
                    .logTile p{
                        margin-top:0;
                        margin-bottom:0;
                    }
                    .id{
                        position: absolute;
                        padding: .2em 1em;
                        top:-.5em;
                        left:0;
                    }
                    .logger p:first-child{
                        margin-block-start: 0em;
                        margin-block-end: .5em;
                    }
                    .logger p:last-child{
                        margin-block-start: .5em;
                        margin-block-end: 0em;
                    }
                    .t-white{
                        padding: .2em 1em;
                        color: white;
                    }
                `}</style>
            </div>
        )
    }
}

export default LogOverview