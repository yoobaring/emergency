
import './Style.css'
import Mainnavbar from '../navbar/Mainnavbar'
import Footer from '../Footer'
import { UncontrolledAlert,Table,Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import React, { Component } from 'react';



class  Home extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        axios.get('https://apiminiyoo.herokuapp.com/api/publishes/')
        .then((response)=> {
            this.props.dispatch({
                type: "updateValue",
                name: 'department',
                value: response.data
            });

  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

}

   
    render(){
        return (
            <div>
                <div className="a">
            <div className="nav" > 
            <div className="Ho">
            <center>
        <Alert color="">
          <h1 className="alert-heading">ข่าวสารประกาศ</h1>
          <p>
          <Table>
      <tbody>


       { this.props.opdData.department.map((item) => (
           
            <UncontrolledAlert color="primary">
        <center>
          <th scope="row">  {item.title}</th><br></br>
          <td>{item.subject}</td>
          </center>
         </UncontrolledAlert>
        
        ))}
    
      </tbody>
    </Table>
          </p>
          
          
        </Alert>
        </center>

        </div>
        <Mainnavbar/>
        </div>
        
        </div  > 
        
        <Footer/>
        </div>

        );
    }
}

Home.propTypes = {

};



const mapStateToProps = (state) => ({
    opdData: state
})

export default compose(connect(mapStateToProps))(Home);
       
