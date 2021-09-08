import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container } from 'react-bootstrap';
//import {Nav.Item} from "react-bootstrap";

class Menu extends Component {
    render() {
      return (
        <Container>
          <Nav variant="tabs" defaultActiveKey="/Home">
            <Nav.Item><Nav.Link href="/Home" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Home');
            }.bind(this)}>Home</Nav.Link></Nav.Item>

            <Nav.Item><Nav.Link href="/Vision" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Vision');
            }.bind(this)}>Vision</Nav.Link></Nav.Item>

            <Nav.Item><Nav.Link href="/Regist" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage('Regist');
            }.bind(this)}>Regist</Nav.Link></Nav.Item>
        </Nav>
        </Container>
      );
    }
  }

export default Menu;