import React, { Component } from 'react';
import HomeLeft from "./HomeLeft"
import HomeRight from "./HomeRight"

import VisionLeft from './VisionLeft';
import VisionRight from './VisionRight';
import Regist from './Regist';

class Middle extends Component {
  render() {
      if(this.props.page === 'Home'){
        return ( //반드시 하나의 최상위 태그만 있어야 함. 병렬 안됨!
          <div>
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>
          </div>
        );
      }
      else if(this.props.page === 'Vision') {
        return (
          <div>
          <VisionLeft selectedNode={this.props.selectedNode} setSelectedSensor={this.props.setSelectedSensor}></VisionLeft>
          <VisionRight selectedSink={this.props.selectedSink} setSelectedNode={this.props.setSelectedNode}></VisionRight>
          </div>
        )
      }
      else if(this.props.page === 'Regist') {
        return (
          <div>
            <Regist
              selectedSink={this.props.selectedSink}
              selectedNode={this.props.selectedNode}
              selectedSensor={this.props.selectedSensor}
              setSelectedSink={this.props.setSelectedSink}
              setSelectedSensor={this.props.setSelectedSensor}
              setSelectedNode={this.props.setSelectedNode}></Regist>
            
          </div>
        )
      }
    }
  }

export default Middle;