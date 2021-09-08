import React, { Component } from 'react';
import ShowPickedSensor from './Regist/ShowPickedSensor';
import ShowPickedNode from './Regist/ShowPickedNode';
import ShowSink from './Regist/ShowSink';
import RegistNode from './Regist/RegistNode';
import RegistSensor from './Regist/RegistSensor';
import RegistSink from './Regist/RegistSink';
import Popup from './Regist/Popup';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPlusSquare,FiMinusSquare } from 'react-icons/fi';


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
      var api = 'http://172.20.10.3:8080/regist/'
      //var api = 'http://localhost:5000/'

      return (
        <Container style={{marginTop:"10px"}}>
          <Row>
            <Col>
              <Container>
                <Row className="justify-content-md-center">
                  <Col><h2 title="Sink Name (id)">Sink Nodes</h2></Col>
                  <Col md="auto"><FiPlusSquare title="Add Sink Node" size="30" onClick={function()
                  {this.setState({sinkAdd: true});
                  }.bind(this)}></FiPlusSquare></Col>
                  <Col xs lg="1">
                  <FiMinusSquare title="Delete Sink Node" size="30" onClick={function()
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
                  ></FiMinusSquare>
                  </Col>
                </Row>
              </Container>
                <ShowSink
                    selectedSink={this.props.selectedSink} 
                    setSelectedSink={this.props.setSelectedSink}
                    setSelectedNode={this.props.setSelectedNode}
                    setSelectedSensor={this.props.setSelectedSensor}></ShowSink>
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col><h2 title="Node Name (id)">Nodes</h2></Col>
                  <Col md="auto"><FiPlusSquare title="Add Node" size="30" onClick={function()
                    {
                      if(this.props.selectedSink === 0) {alert("Select Sink Node first.")}
                      else {
                      this.setState({nodeAdd: true}); }
                    }.bind(this)}></FiPlusSquare></Col>
                  <Col xs lg="1">
                    <FiMinusSquare title="Delete Node" size="30" onClick={function()
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
                    ></FiMinusSquare>
                  </Col>
                </Row>
              </Container>
                <ShowPickedNode 
                    selectedSink={this.props.selectedSink}
                    selectedNode={this.props.selectedNode}
                    setSelectedNode={this.props.setSelectedNode}
                    setSelectedSensor={this.props.setSelectedSensor}></ShowPickedNode>
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col><h2 title="Sensor Name (id)">Sensors</h2></Col>
                  <Col md="auto">
                    <FiPlusSquare title="Add Sensor" size="30" onClick={function()
                      {
                        if(this.props.selectedNode === 0) {alert("Select Node first.")}
                        else {
                        this.setState({sensorAdd: true}); }
                      }.bind(this)}></FiPlusSquare>
                  </Col>
                  <Col xs lg="1">
                  <FiMinusSquare title="Delete Sensor" size="30" onClick={function()
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
                    ></FiMinusSquare>
                  </Col>
                </Row>
              </Container>
                <ShowPickedSensor
                  selectedSensor={this.props.selectedSensor}
                  selectedNode={this.props.selectedNode}
                  setSelectedSensor={this.props.setSelectedSensor}></ShowPickedSensor>
            </Col>
          </Row>

            <Popup
              trigger={this.state.sinkAdd}
              triggerOff={function(){ this.setState({sinkAdd: false})}.bind(this)}>
              <RegistSink handleSinkR={function(sensor_info){
                fetch(api+'sinks', {	// fetch를 통해 Ajax통신을 한다.
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
                fetch(api+'nodes', {	// fetch를 통해 Ajax통신을 한다.
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
                fetch(api+'sensors', {	// fetch를 통해 Ajax통신을 한다.
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
        </Container>
      );
    }
  }

export default Regist;