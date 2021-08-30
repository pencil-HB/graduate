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
      <div className="NodeRegist-form-wrapper">
        <h3>싱크노드 등록</h3>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>싱크노드 이름</th>
                <td><input type='text' name='name' autoComplete="off"/></td>
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

export default RegistSink;