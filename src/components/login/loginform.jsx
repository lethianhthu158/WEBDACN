import "./loginform.css";
import { Link } from "@material-ui/core";




function Login  () {
   
    
    return (
    <div className="wrap-loginform">
        <div className="wrap-close"><Link to='/home'><button className="close-button" ><i class="far fa-times-circle"></i>
        </button></Link></div>
       
        <p className="title">Login</p>
        <div className="container-input">
            <p className="title-input"> Email</p>
            <input className="input"></input>
            <p className="title-input"> Password</p>
            <input className="input"></input>
            <div className="wrap-fotgot"><a className="forgot-pass" href="https://www.facebook.com/profile.php?id=100077535672034">Forgot Password?</a></div>

        </div>
        <div className="wrap-icon">
        <button className="accout-button"><i class="Icon fab fa-facebook-f"></i></button>
        <button className="accout-button"><i class="Icon fab fa-google"></i></button>
        </div>
        
        <div className="wrap-login">
            <div className="text-Resgiter">New Here? <a className="forgot-pass" href="https://www.facebook.com/profile.php?id=100077535672034">Resgiter</a></div>
            <button className="login-button">
                Login
               
            </button>
        </div>
        
    </div>
    );
}
export default Login;