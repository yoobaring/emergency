import '../components/navbar/Scoll.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Table } from 'reactstrap';
import React, { Component } from 'react';



class  Listnamesub extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        axios.get('https://apiminiyoo.herokuapp.com/api/nurses/')
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
        
            <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อจริง</th>
          <th>สกุล</th>
          <th>เบอร์โทร</th>
          <th>ตารางเวร</th>
          <th>เวลาเข้าเวร</th>
          <th>เพศ</th>
        </tr>
      </thead>
      <tbody>




       { this.props.opdData.department.map((item, i) => (
        <tr>
          <th scope="row"> {i}</th>
          <td>{item.firstname}</td>
          <td>{item.surname}</td>
          <td>{item.phone}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.sex}</td>
        </tr>
        ))}
    
      </tbody>
    </Table>
            

        </div>

        );
    }
}

Listnamesub.propTypes = {

};



const mapStateToProps = (state) => ({
    opdData: state
})

export default compose(connect(mapStateToProps))(Listnamesub);
       