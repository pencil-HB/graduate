import React from 'react';

class RegisterNode extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleNodeR({
      name: e.target.name.value,
      sink_id: e.target.sinkId.value
    });
  }

  render() {
    return(
      <div className="NodeRegister-form-wrapper">
        <h3>Register Node</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Node Name : </th>
                <td><input type='text' name='name' autoComplete="off"/></td>
              </tr>
              <tr>
                <td><input type='hidden' name='sinkId' value={this.props.selectedSink}></input></td>
              </tr>
              <tr>
                <td colSpan='2'><input type='submit' value='Submit'/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default RegisterNode;