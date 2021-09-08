import React from 'react';

class RegistSink extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleSinkR({
      name: e.target.name.value
    });
  }

  render() {
    return(
      <div className="SinkRegist-form-wrapper">
        <h3>Regist Sink Node</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Sink Node Name : </th>
                <td><input type='text' name='name' autoComplete="off"/></td>
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

export default RegistSink;