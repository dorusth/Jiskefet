const Fragment = React.Fragment

class PreviewTab extends React.Component {
    constructor(props){
		super(props);
        this.state = {
            name: props.tab,
            count: props.count,
        }
    }

    render(){
        this.checkActive()
        return(
            <Fragment>
                <div id="test1" className={this.props.active +" col s12 logTab"}>{this.state.name}</div>
                <style jsx>{`
                .active{
                    display: block;
                }
                .inactive{
                    display: none;
                }
                `}</style>
            </Fragment>
        )
    }
}

export default PreviewTab