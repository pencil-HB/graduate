//import logo from './logo.svg';
import React, { Component } from 'react';
import Middle from "./components/Middle"
import Menu from "./components/Menu"
import './App.css';

class App extends Component { //App 이라는 컴포넌트를 만든 것임.
  constructor(props){ //초기화를 담당.
    super(props);
    this.max_page = 3;
    this.state = {
      page: 'Home',
      selected_sink: 0,
      selected_node: 0,
      selected_sensor: 0
    }
  }

  render() {
    return (
      <div className="App">
          <Menu onChangePage={function(_page){
            if(_page === 'Vision'){
              this.setState({
                page: 'Vision'
              });
            }
            else if(_page === 'Regist'){
              this.setState({
                page: 'Regist'
              });
            }
            else {
              this.setState({
                page: 'Home'
              });
            }
          }.bind(this)}>            
          </Menu>
          <div>
            <Middle 
              page={this.state.page} 
              selectedSink={this.state.selected_sink}
              selectedNode={this.state.selected_node}
              selectedSensor={this.state.selected_sensor}
              setSelectedSink={function(selectedSink){
                this.setState({selected_sink : selectedSink});
              }.bind(this)}
              setSelectedNode={function(selectedNode){
                this.setState({selected_node: selectedNode});
              }.bind(this)}
              setSelectedSensor={function(selectedSensor){
                this.setState({selected_sensor: selectedSensor}); //왜안되냐 왜
              }.bind(this)}
            ></Middle>
          </div>
        </div>
    );
  }
}

export default App;