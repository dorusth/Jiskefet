import Link from 'next/link'
import PreviewTabs from './previewTabs'

class LogPreview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
			CurrentTab:0,
			tabs: [
				{
					name:"content",
					count: 0
				},
				{
					name:"runs",
					count: 1
				},
				{
					name:"files",
					count: 2
				},
				{
					name:"other",
					count: 3
				}
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

    LogTab = (props) =>{
        return(
            <li className="tab col s3"><a href="#" id={props.count} className={props.active} onClick={this.updateCurrent}>{props.name}</a></li>
        )
    }

    render(){
        
        return(
            <div className=" container col s4 blue-grey lighten-5">
                <h2>{this.props.data.title}</h2>
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
                    <ul className="ulBullet">
                        <li>Log ID: <b>{this.props.data.logId}</b></li>
                        <li>Subtype: <b>{this.props.data.subtype}</b></li>
                        <li>Origin: <b>{this.props.data.origin}</b></li>
                        <li>Creation time: <b>{this.props.data.creationTime}</b></li>
                        <li>Author: <b>{this.props.data.user.userId}</b></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs z-depth-1">
                            {this.state.tabs.map((tab, key)=>{
                                return(
                                    <this.LogTab count={tab.count} active={this.checkActive(tab.count)} name={tab.name} key={key}/>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col s12">
                    {this.state.tabs.map((tab, key)=>{
                        return(
                            <PreviewTabs key={key} content={this.props.data} tab={tab.name} active={this.checkActive(tab.count)} count={tab.count} />
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default LogPreview;