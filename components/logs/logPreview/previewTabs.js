import { runInThisContext } from "vm";

const Fragment = React.Fragment

class PreviewTab extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            content: this.props.content.body,
            runs: this.props.content.runs.length > 0 ? this.props.content.runs : 'Runs here',
            files: "files here",
            other: "others here"
        }
    }

    render(){
        return(
            <Fragment>
                <div id="test1" className={this.props.active +" col s12 logTab white"}>{this.state[this.props.tab]}</div>
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