import React, { Component } from 'react';


class Menu extends Component {
    render() {
      return ( //반드시 하나의 최상위 태그만 있어야 함. 병렬 안됨!
        <ul>
            <li><a href="/Home" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Home');
            }.bind(this)}>Home</a></li>

            <li><a href="/Vision" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Vision');
            }.bind(this)}>Vision</a></li>

            <li><a href="/Regist" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Regist');
            }.bind(this)}>Regist</a></li>
        </ul>
      );
    }
  }

export default Menu;