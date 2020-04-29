import React from 'react';
import Mainnavbar from '../components/navbar/Mainnavbar';
import '../components/page/Style.css';

import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props); 
    this.login=this.login.bind(this);
    this.state={
      email:"",
      password:""
    }
  }
  login=()=>{
    alert('กำลัง Login');
    axios.post("https://apiminiyoo.herokuapp.com/api/Users/login/",{email: this.state.email,password: this.state.password})
    .catch((error)=>{
    alert('ป้อนอีเมล์หรือรหัสผ่านผิด โปรดพยายามลองใหม่อีกครั้ง');
    this.props.history.push("/login");
    })
    .then((response)=>{
      console.log(response);
      this.props.history.push("/");
      sessionStorage.setItem("login_email",this.state.email);
      sessionStorage.setItem("login_access_token",response.data.id);
      sessionStorage.setItem("login_created",response.data.created);
      sessionStorage.setItem("login_userId",response.data.userId);
      this.props.dispatch({
        type:"login",
        login_email: this.state.email
      })
    })
  }
  
  handleChange=(event)=>{
    console.log(event.target.name)
    this.setState({[event.target.name]:event.target.value});
    }

  
  render() {
    return(
      <div>
      <div>
  
  
  {/* partial:index.partial.html */}
  <div className="body-login">
  <div className="materialContainer">
  <div className="box">
    <div className="title">ล๊อกอิน</div>
    <div className="input">
      <label htmlFor="name">ชื่อผู้ใช้</label>
      <input type="text" name="email" id="name" value={this.state.email} onChange={this.handleChange} />
      <span className="spin" />
    </div>
    <div className="input">
      <label htmlFor="pass">รหัสผ่าน</label>
      <input type="password" name="password" id="pass" value={this.state.password} onChange={this.handleChange} />
      <span className="spin" />
    </div>
    <div className="button login">
      {/* <div>{this.state.password}</div> */}
      <button onClick={this.login} className="fa fa-check">ลงชื่อเข้าใช้</button>
    </div>

  </div>
  <div className="overbox">
    <div className="material-button alt-2">
      <span className="shape" />
    </div>
    <div className="title">REGISTER</div>
    <div className="input">
      <label htmlFor="regname">Username</label>
      <input type="text" name="regname" id="regname" />
      <span className="spin" />
    </div>
    <div className="input">
      <label htmlFor="regpass">Password</label>
      <input type="password" name="regpass" id="regpass" />
      <span className="spin" />
    </div>

    <div className="button">
      <button>
        <span>ลงชื่อเข้าใช้</span>
      </button>
    </div>
  </div>
  </div>
  </div>
  {/* partial */}
  <Mainnavbar/>
  </div>
  </div>
    );}
    }
    export default connect()(Login);