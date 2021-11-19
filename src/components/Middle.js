import React, { Component } from 'react';
import HomeLeft from "./Home/HomeLeft"
import HomeRight from "./Home/HomeRight"
import VisionLeft from './Vision/VisionLeft';
import VisionRight from './Vision/VisionRight';
import Register from './Register';
import { Container } from 'react-bootstrap';

class Middle extends Component {
  render() {
      if(this.props.page === 'Home'){
        return (
          <Container>
            <HomeLeft></HomeLeft>
          </Container>
        );
      }
      else if(this.props.page === 'Vision') {
        return (
          <Container>
            <VisionLeft selectedNode={this.props.selectedNode} setSelectedSensor={this.props.setSelectedSensor}></VisionLeft>
            <VisionRight selectedSink={this.props.selectedSink} setSelectedNode={this.props.setSelectedNode}></VisionRight>
          </Container>
        )
      }
      else if(this.props.page === 'Register') {
        return (
          <div>
            <Register
              selectedSink={this.props.selectedSink}
              selectedNode={this.props.selectedNode}
              selectedSensor={this.props.selectedSensor}
              setSelectedSink={this.props.setSelectedSink}
              setSelectedSensor={this.props.setSelectedSensor}
              setSelectedNode={this.props.setSelectedNode}></Register>
            
          </div>
        )
      }
    }
  }

export default Middle;