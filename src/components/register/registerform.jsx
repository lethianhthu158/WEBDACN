import "./registerform.css";




function Register  () {
   
    
    return (
    <div className="wrap-loginform">
        <div className="wrap-close"><button className="close-button" ><i class="far fa-times-circle"></i>
        </button></div>
       
        <p className="title">Register</p>
        <div className="container-input">
             <p className="title-input"> Full name</p>
            <input className="input"></input>
            <p className="title-input"> Email</p>
            <input className="input"></input>
            <p className="title-input"> Password</p>
            <input className="input"></input>
            <p className="title-input"> Confirm Password</p>
            <input className="input"></input>
            

        </div>
        <div className="wrap-icon">
        <button className="accout-button"><i class="Icon fab fa-facebook-f"></i></button>
        <button className="accout-button"><i class="Icon fab fa-google"></i></button>
        </div>
        
        <div className="wrap-login">
            <div className="text-Resgiter">Already member? <a className="forgot-pass" href="https://www.facebook.com/profile.php?id=100077535672034">Login</a></div>
            <button className="register-button">
                Register
               
            </button>
        </div>
        
    </div>
    );
}
export default Register;