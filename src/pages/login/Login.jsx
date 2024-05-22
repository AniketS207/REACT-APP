// import Google from "../img/google.png";
// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";
// import "./login.css"

// const Login = () => {
//   const google = () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   const github = () => {
//     window.open("http://localhost:5000/auth/github", "_self");
//   };

//   const facebook = () => {
//     window.open("http://localhost:5000/auth/facebook", "_self");
//   };

//   return (
//     <div className="login">
//       <h1 className="loginTitle">Choose a Login Method</h1>
//       <div className="wrapper">
//         <div className="left">
//           <div className="loginButton google" onClick={google}>
//             <img src={Google} alt="" className="icon" />
//             Google
//           </div>
//           <div className="loginButton facebook" onClick={facebook}>
//             <img src={Facebook} alt="" className="icon" />
//             Facebook
//           </div>
//           <div className="loginButton github" onClick={github}>
//             <img src={Github} alt="" className="icon" />
//             Github
//           </div>
//         </div>
//         <div className="center">
//           <div className="line" />
//           <div className="or">OR</div>
//         </div>
//         <div className="right">
//           <input type="text" placeholder="Username" />
//           <input type="text" placeholder="Password" />
//           <button className="submit">Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BUZZ</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BUZZ.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
