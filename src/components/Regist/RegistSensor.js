import React from 'react';
import AddSensor from './AddSensor';

class RegistSensor extends React.Component {

  handleSubmit = valueList => e => {
    e.preventDefault();

    var i = 0;

    while(i <e.target.length) {
      if (e.target[i].name === 'sensorValue'){
        valueList.push({"value_name" : (e.target[i].value)})
      }
      i +=1;
    }

    this.props.handleSensorR({
      name: e.target.name.value,
      sensor_values: valueList,
      node_id: e.target.nodeId.value
    });
  }

  render() {
    var valueList = [];
    return(
      <div className="SensorRegist-form-wrapper">
        <h3>Regist Sensor</h3>
        <form onSubmit={this.handleSubmit(valueList)}>
          <table>
            <tbody>
              <tr>
                <th>Sensor Name : </th>
                <td><input type='text' name='name' autoComplete="off"/></td>
              </tr>
              <AddSensor></AddSensor>
              <tr>
                <td><input type='hidden' name='nodeId' value={this.props.selectedNode}/></td>
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

export default RegistSensor;