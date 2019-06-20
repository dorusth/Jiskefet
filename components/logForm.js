import TextArea from 'react-mention-plugin';
import { thisExpression } from '@babel/types';

class LogForm extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              log: '...',
              action: '...'
          }
          this.handleLogChange = this.handleLogChange.bind(this)
          this.handleActionChange = this.handleActionChange.bind(this)
        }

        handleLogChange(event) {
            this.setState({ log: event.target.value });
        }
        handleActionChange(event){
            this.setState({ action: event.target.value });
        }
        handleSubmit(event){
            event.preventDefault();
        }
    render() {
        const suggestions = [
            {
                id: 1,
                value: 'barrel',
                label: 'barrel'
            },
            {
                id: 2,
                value: 'innerBarrel',
                label: 'inner-barrel'
            },
            {
                id: 3,
                value: 'outerBarrel',
                label: 'outer-barrel'
            }
        ]
        return (
            <div className="row col s6">
                <div className="rounded">
                    <h3 className="center">New log</h3>
                    <form action="" method="post" onSubmit={this.handleSubmit}>
                        <div>
                            <label>Enter a title</label>
                            <input placeholder="title for log" type="text" id="log_name" />
                        </div>

                        <div>
                            <label>What are you going to write a log about?</label>
                            <select value={this.state.value} onChange={this.handleLogChange}>
                                <option value="hardware">Hardware</option>
                                <option value="software">Software</option>
                                <option value="server">Server</option>
                                <option value="boards">Boards</option>
                                <option value="electricity">Electricity</option>
                            </select>
                        </div>

                        <div>
                            <label>What is the action that happened?</label>
                            <select value={this.state.action} onChange={this.handleActionChange}>
                                <option value="succes">succes</option>
                                <option value="failure">failure</option>
                                <option value="error">error</option>
                                <option value="movement physical">movement physical</option>
                                <option value="movement digital">movement digital</option>
                                <option value="installation">installation</option>
                                <option value="update">update</option>
                                <option value="other">other..</option>
                            </select>
                        </div>

                        <div className="text-align-center">
                            <p>This log is about <b>{this.state.action}</b> in the <b>{this.state.log}</b></p>
                        </div>
                        <div>
                            <label>Add extra tags</label>
                            <TextArea suggestions={suggestions} />
                        </div>
                        <div>
                            <label>input logs</label>
                            <input placeholder="input logs" type="text" id="extra_tags" />
                        </div>
                        <div className="flex-column">
                            <label>Add files or select folder</label>
                            <input type="file" name="file" accept="*" />
                        </div>
                        <div className="flex-row">
                            <input type="checkbox" />
                            <label>This log is important</label>
                        </div>
                        <div className="flex-row">
                            <input type="checkbox"/>
                            <label>Link to run</label>
                        </div>
                        <div>
                            <input type="submit" value="Create new log" />
                        </div>
                    </form>
                </div>
                <style global jsx>{`
                [type="checkbox"]:checked {
                    height: 1.5em;
                    width: 1.5em;
                    opacity: 1;
                    position: initial;
                    border: 0 solid #979797;
                }
                [type="checkbox"]:not(:checked) {
                    height: 1.5em;
                    width: 1.5em;
                     opacity: 1;
                    position: initial;
                    border: 0 solid #979797;
                }
                input[type=submit]{
                    background: #f39c12;
                    color: white;
                    height: 2.5em;
                    width: 12.5em;
                    border:none;
                    font-size: 18px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
                    border-bottom: 3px solid #e8930c;
                    cursor: pointer;
                    -webkit-box-shadow: inset 0 -2px #e8930c;
                    box-shadow: inset 0 -2px #e8930c;
                }
                input[type=submit]:active {
                      top: 1px;
                        outline: none;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                }
                select{
                    display: block;
                }
                .text-align-center {
                    text-align: center;
                }
                .flex-column {
                    display: flex;
                    flex-direction: column;
                      padding-top: 1em;
                    padding-bottom: 1em;
                }
                .flex-row {
                    max-width: 10em;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    flex-direction: row;
                    padding-top: 1em;
                    padding-bottom: 1em;
                }
                `}</style>
            </div>
        )
    }
}

export default LogForm