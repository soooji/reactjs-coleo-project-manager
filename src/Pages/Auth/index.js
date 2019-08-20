import React,{Component} from 'react';
import {Redirect} from "react-router-dom";
import { MainContext } from '../../APIs/theme-context';
class Login extends Component {
  static contextType = MainContext;
  
  state = { redirectToReferrer: false,isLoading: false };
  login = () => {
    if(this.state.isLoading) return;
    this.setState({isLoading:true})
    setTimeout(()=>{
      this.context.setToken('1234');
      this.setState({isLoading:false})
    },3000);
  };
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/panel" } };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer || this.context.token) return <Redirect to={from} />;

    return (
      <div className="auth-page">
        <div className="intro-box">
          <h2 className="title">Coleo</h2>
          <div className="image"></div>
          <div className="description">
          Let’s make the life
          <br/>
          a little bit easier.
          </div>
          <div className="apply">
            Apply for a job :)
          </div>
        </div>
        <div className="login-box">
          <div className="title">Login</div>
          <input placeholder="Username" type="username"/>
          <input placeholder="Password" type="password"/>
          <div onClick={()=>this.login()} className={`submit ${this.state.isLoading ? "loading" : ""}`}>
            {!this.state.isLoading ? "Submit" : "wait a moment..."}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;