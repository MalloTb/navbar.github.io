import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import {Hasil, NavbarComponent, ListCategory, Menus} from './components/index'
import React, { Component } from 'react'
import {API_URL} from './util/constants'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      menus: []
    }
  }
  componentDidMount(){
    axios.get(API_URL+"products")
    .then(res =>{
      const menus = res.data
      this.setState({menus})
    })
    .catch(error =>{
      console.log(error)
    })
  }

  render() {
    const {menus} = this.state
    return (
      <div>
    <NavbarComponent />
    <div className='mt-3'>
    <Container fluid>
    <Row>
    <ListCategory />
    <Col>
    <h4>Daftar Produk</h4>
    <hr />
    <Row>
    {
      menus && menus.map((menu)=>(
        <Menus key={menu.id} menu={menu} />
        ))
    }
    </Row>
    </Col>
    <Hasil />
    </Row>
    </Container>
    </div>
    </div>
    )
  }
}