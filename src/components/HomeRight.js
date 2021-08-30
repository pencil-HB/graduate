import React, { Component } from 'react';


class HomeRight extends Component {
    render() {
      return ( //반드시 하나의 최상위 태그만 있어야 함. 병렬 안됨!
        <div style={{display:"inline-blcok", border:"solid black"}}>
          HomeRight
        </div>
      );
    }
  }

export default HomeRight;