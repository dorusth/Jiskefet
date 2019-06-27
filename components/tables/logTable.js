class LogTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = null
    }
    render() {
        let data = this.props.data.slice(1).slice(-3)
        let log1 = data[0]
        let log2 = data[1]
        let log3 = data[2]
        return (
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Log id</th>
                        <th>Title</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{log1.logId}</td>
                        <td>{log1.title}</td>
                        <td>{log1.creationTime}</td>
                    </tr>
                    <tr>
                        <td>{log2.logId}</td>
                        <td>{log2.title}</td>
                        <td>{log2.creationTime}</td>
                    </tr>
                    <tr>
                        <td>{log3.logId}</td>
                        <td>{log3.title}</td>
                        <td>{log3.creationTime}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default LogTable