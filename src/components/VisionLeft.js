import React, { Component } from 'react';


class VisionLeft extends Component {
    render() {
      return ( //반드시 하나의 최상위 태그만 있어야 함. 병렬 안됨!
        <div style={{float:"left", width:"48%", height:"50%", border:"solid black"}}>
            VisionLeft
        </div>
      );
    }
  }

export default VisionLeft;