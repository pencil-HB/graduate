import React from 'react';

class RegistNode extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleNodeR({
      name: e.target.name.value,
      sink_id: e.target.sinkId.value
    });
  }

  render() {
    return(
      <div className="NodeRegist-form-wrapper">
        <h3>노드 등록</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>노드 이름</th>
                <td><input type='text' name='name' autoComplete="off"/></td>
              </tr>
              <tr>
                <td><input type='hidden' name='sinkId' value={this.props.selectedSink}></input></td>
              </tr>
              <tr>
                <td colSpan='2'><input type='submit' value='제출'/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default RegistNode;