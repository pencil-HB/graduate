import React, { Component } from 'react';
import axios from 'axios';

class NodeList extends Component{
    render() {
        var nodes;
        var picked_sink = this.props.selected.sink;
        var i = 0;

        const response = axios.get(
            'http://localhost:5000/nodes'
        );

        nodes = JSON.parse(JSON.stringify(response.data))
        return (
            <p>kkkkkkkkkkkkkk</p>
        )
    }
}

export default NodeList