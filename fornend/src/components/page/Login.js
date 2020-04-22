import React from 'react'
import "./style.css"


const Login = () => {

    return(
        <div>


  {/* partial:index.partial.html */}
  <div className="body-login">
  <div className="materialContainer">
    <div className="box">
      <div className="title">ล๊อกอิน</div>
      <div className="input">
        <label htmlFor="name">ชื่อผู้ใช้</label>
        <input type="text" name="name" id="name" />
        <span className="spin" />
      </div>
      <div className="input">
        <label htmlFor="pass">รหัสผ่าน</label>
        <input type="password" name="pass" id="pass" />
        <span className="spin" />
      </div>
      <div className="button login">
        <button>
          <span>ล๊อกอิน</span> <i className="fa fa-check" />
        </button>
      </div>
      <a href className="pass-forgot">
        Forgot your password?
      </a>
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
</div>
    )
}
export default Login;