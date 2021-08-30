import React, { Component } from 'react';
import ShowPickedSensor from './ShowPickedSensor';
import ShowPickedNode from './ShowPickedNode';
import ShowSink from './ShowSink';
import PlusPng from '../images/plus.png';
import MinusPng from '../images/minus.png';
import RegistNode from './RegistNode';
import RegistSensor from './RegistSensor';
import RegistSink from './RegistSink';
import Popup from './Popup';
import axios from 'axios';


class Regist extends Component {
  constructor(props){ //초기화
    super(props);
    this.state = {
      sinkAdd : false,
      nodeAdd : false,
      sensorAdd : false
    };
  }

    render() {
      var size="30px";
      var api = 'http://localhost:5000/'

      return ( //반드시 하나의 최상위 태그만 있어야 함. 병렬 안됨!
        <div>
            <div style={{float:"left", width:"33.3%", height:"50vh"}}>
              <div style={{display: "block"}}>
                <h1 style={{width: "70%"}}>Sink Nodes</h1>
                <img src={PlusPng} style={{width:size}} onClick={function()
                {this.setState({sinkAdd: true});
                }.bind(this)}></img>
                <img src={MinusPng} style={{width:size}} onClick={function()
                {
                  if(this.props.selectedSink === 0) {alert("Select Sink Node to delete first.")}
                  else {
                    if(window.confirm("Are you sure to remove this Sink Node?")) {
                      this.props.setSelectedSink(0);
                      try {axios.delete(
                        api+'sinks/'+ this.props.selectedSink
                      ) }
                      catch (e) {
                        alert("Error!");
                      }
                    }
                  }
                }.bind(this) }
                ></img>
              </div>
                <ShowSink
                    selectedSink={this.props.selectedSink} 
                    setSelectedSink={this.props.setSelectedSink}
                    setSelectedNode={this.props.setSelectedNode}
                    setSelectedSensor={this.props.setSelectedSensor}></ShowSink>
            </div>
            <div style={{float:"left", width:"33.3%", height:"50vh"}}>
              <h1>Nodes</h1>
              <img src={PlusPng} style={{width:size}} onClick={function()
                {
                  if(this.props.selectedSink === 0) {alert("Select Sink Node first.")}
                  else {
                  this.setState({nodeAdd: true}); }
                }.bind(this)}></img>
              <img src={MinusPng} style={{width:size}} onClick={function()
                {
                  if(this.props.selectedNode === 0) {alert("Select Node to delete first.")}
                  else {
                    if(window.confirm("Are you sure to remove this Node?")) {
                      this.props.setSelectedNode(0);
                      try {axios.delete(
                        api + 'nodes/'+ this.props.selectedNode
                      ) }
                      catch (e) {
                        alert("Error!");
                      }
                    }
                  }
                }.bind(this) }
                ></img>
                <ShowPickedNode 
                    selectedSink={this.props.selectedSink}
                    selectedNode={this.props.selectedNode}
                    setSelectedNode={this.props.setSelectedNode}
                    setSelectedSensor={this.props.setSelectedSensor}></ShowPickedNode>
            </div>
            <div style={{float:"left", width:"33.3%", height:"50vh"}}>
              <h1>Sensors</h1>
              <img src={PlusPng} style={{width:size}} onClick={function()
                {
                  if(this.props.selectedNode === 0) {alert("Select Node first.")}
                  else {
                  this.setState({sensorAdd: true}); }
                }.bind(this)}></img>
                <img src={MinusPng} style={{width:size}} onClick={function()
                {
                  if(this.props.selectedSensor === 0) {alert("Select Sensor to delete first.")}
                  else {
                    if(window.confirm("Are you sure to remove this Sensor?")) {
                      this.props.setSelectedSensor(0);
                      try {axios.delete(
                        api +'sensors/'+ this.props.selectedSensor
                      ) }
                      catch (e) {
                        alert("Error!");
                      }
                    }
                  }
                }.bind(this) }
                ></img>
                <ShowPickedSensor
                  selectedSensor={this.props.selectedSensor}
                  selectedNode={this.props.selectedNode}
                  setSelectedSensor={this.props.setSelectedSensor}></ShowPickedSensor>
            </div>

            <Popup
              trigger={this.state.sinkAdd}
              triggerOff={function(){ this.setState({sinkAdd: false})}.bind(this)}>
              <RegistSink handleSinkR={function(sensor_info){
                fetch('http://localhost:5000/sinks', {	// fetch를 통해 Ajax통신을 한다.
                method: 'post',	// 방식은 post
                headers: {
                  "Content-Type": "application/json; charset=utf-8"	// 헤더에서 본문 타입 설정
                },
                body: JSON.stringify(sensor_info)	// body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
              })
                .then(res => res.json());
                alert("싱크노드 등록이 완료되었습니다.");
                this.setState({sinkAdd : false});
              }.bind(this)}>
              </RegistSink>
            </Popup>

            <Popup
              trigger={this.state.nodeAdd}
              triggerOff={function(){ this.setState({nodeAdd: false})}.bind(this)}>
              <RegistNode 
                selectedSink = {this.props.selectedSink}
                handleNodeR={function(node_info){
                fetch('http://localhost:5000/nodes', {	// fetch를 통해 Ajax통신을 한다.
                method: 'post',	// 방식은 post
                headers: {
                  "Content-Type": "application/json; charset=utf-8"	// 헤더에서 본문 타입 설정
                },
                body: JSON.stringify(node_info)	// body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
              })
                .then(res => res.json());
                alert("노드 등록이 완료되었습니다.");
                this.setState({nodeAdd : false});
              }.bind(this) }></RegistNode>
            </Popup>

            <Popup
              trigger={this.state.sensorAdd}
              triggerOff={function(){ this.setState({sensorAdd: false})}.bind(this)}>
              <RegistSensor
                selectedNode = {this.props.selectedNode}
                handleSensorR={function(sensor_info){
                fetch('http://localhost:5000/sensors', {	// fetch를 통해 Ajax통신을 한다.
                method: 'post',	// 방식은 post
                headers: {
                  "Content-Type": "application/json; charset=utf-8"	// 헤더에서 본문 타입 설정
                },
                body: JSON.stringify(sensor_info)	// body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
              })
                .then(res => res.json());
                alert("센서 등록이 완료되었습니다.");
                this.setState({sensorAdd : false});
              }.bind(this) }></RegistSensor>
            </Popup>
        </div>
      );
    }
  }

export default Regist;