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
        console.log(this.props.logs.data)
        return(
            <div className="col s8 green container">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            {this.state.tabs.map((tab, key)=>{
                                return(
                                    <this.Tab count={tab.count} active={this.checkActive(tab.count)} name={tab.name} key={key}/>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        {this.props.logs.data.item.map((log,key)=>{
                            return(
                                <p key={key}>{log.logId}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default LogOverview