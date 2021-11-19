import React, { Component } from 'react';


class HomeLeft extends Component {
    render() {
      return (
        <div style={{float:"left", width:"50%", display:"inline-blcok"}}>
          <iframe style={{width:"90vw", height:"150vh"}} src="http://172.20.10.4:5601/app/dashboards#/view/de670760-1068-11ec-ab7e-51bc8dd169ce?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2021-08-23T06%3A27%3A24.755Z'%2Cto%3A'2021-08-28T06%3A42%3A30.861Z'))">
          Link of Kibana</iframe>
        </div>
      );
    }
  }

export default HomeLeft;