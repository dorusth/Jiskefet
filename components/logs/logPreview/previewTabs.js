const Fragment = React.Fragment

class PreviewTab extends React.Component {
    render(){
        return(
            <Fragment>
                <div id="test1" className={this.props.active +" col s12 logTab"}>{this.props.tab}</div>
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