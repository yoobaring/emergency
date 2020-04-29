
import '../components/navbar/Scoll.css';


import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from 'axios';
// import { connect } from 'react-redux';
// import { compose } from 'recompose';
// import { Table } from 'reactstrap';
import React, { Component,useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Listnamesub from './Listnamesub';
import Leave from '../user/Leave';
import SearchtListname from '../user/Searchlistname'
import Footer from '../components/Footer';
import Mainnavbar from '../components/navbar/Mainnavbar';


const Listname = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    
        return (
<div>
        
        
        <div className="main-board">
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <Button color="primary" size="lg">รายชื่อคลังทั้งหมด</Button>

          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <Button color="primary" size="lg">ค้นหาตารางเวร</Button>

          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <Button color="primary" size="lg">แจ้งใบลา</Button>

          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>
                  <Listnamesub/>
              </h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col >
              <Card body>
                <CardTitle>ค้นหาตารางเวร</CardTitle>

                <SearchtListname />

              </Card>
            </Col>
            
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col >
              <Card body>
                <CardTitle>ต้องการแจ้งลากิจ ลาป่วย</CardTitle>
                
                
                <Leave />
              
              </Card>
            </Col>
            
          </Row>
        </TabPane>
      </TabContent>
            

        </div>

        <div className="a">
        <div className="nav" > 
        <Mainnavbar/>
        </div>
        
        </div  > 
        
        <Footer/>
</div>
        );
    }

export default Listname;
