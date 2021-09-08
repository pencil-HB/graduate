import React, { Component } from 'react';
import Detect from './Detect';


class VisionLeft extends Component {
    render() {
      return (
        <div style={{float:"left", width:"48%", height:"50%"}}>
            <Detect></Detect>
        </div>
      );
    }
  }

export default VisionLeft;