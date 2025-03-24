// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Auth.css"; // Updated CSS for the new design

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:4000/login", { email, password });
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("userName", response.data.user.name);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error logging in");
//     }
//   };

//   return (
//     <div className="auth-container mt-5 py-5">
//       <div className="auth-left">
//         <img src="./src/images/Login.png" alt="Login" className="auth-image" />
//       </div>
//       <div className="auth-right">
//         <div className="auth-card">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>
//                 <FaEnvelope className="input-icon" /> Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 <FaLock className="input-icon" /> Password
//               </label>
//               <div className="password-input">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="show-password-button"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>
//             <button type="submit" className="auth-button">
//               Login
//             </button>
//           </form>
//           <p className="auth-link">
//             Don't have an account? <Link to="/signup">Sign up here</Link>
//           </p>
//           {/* <p className="auth-link">
//             <Link to="/forgot-password">Forgot password?</Link>
//           </p> */}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;