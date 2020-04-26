import React from 'react';
import Mainnavbar from '../components/navbar/Mainnavbar';
import '../components/page/Style.css';

import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login=this.login.bind(this);
    this.state={
      email:'',
      password:''
    }
  }
  login=()=>{
    alert('Login สำเร็จแล้ว');
    axios.post("http://localhost:3000/api/User/login",{email: this.state.email,password: this.state.password})
    .catch((error)=>{
    alert('ป้อนอีเมล์หรือรหัสผ่านผิด โปรดพยายามลองใหม่อีกครั้ง');
    this.props.history.push("/");
    })
    .then((response)=>{
      console.log(response);
    })
  }
    handleChange=(event)=>{
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
      <button onClick={this.login} className="fa fa-check">Login</button>
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
    <div className="input">
      <label htmlFor="reregpass">Repeat Password</label>
      <input type="password" name="reregpass" id="reregpass" />
      <span className="spin" />
    </div>
    <div className="button">
      <button>
        <span>NEXT</span>
      </button>
    </div>
  </div>
  </div>
  </div>
  {/* partial */}
  <Mainnavbar/>
  </div>
  </div>
    )}
    }
