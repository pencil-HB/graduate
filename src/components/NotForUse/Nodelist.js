import React, { Component } from 'react';
import axios from 'axios';

class NodeList extends Component{
    render() {
        var nodes;
        var picked_sink = this.props.selected.sink;
        var i = 0;

        const response = axios.get(
            'http://172.20.10.3:8080/regist/nodes'
        );

        nodes = JSON.parse(JSON.stringify(response.data))
        return (
            <p>kkkkkkkkkkkkkk</p>
        )
    }
}

export default NodeList