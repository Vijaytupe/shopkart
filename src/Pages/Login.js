import { useForm } from "react-hook-form";
import "./Login.css";
import { useState } from "react";

export default function Login() {
  const{
    register,
    handleSubmit,
    formState:{errors},
    reset

  }= useForm();

  const [successMessage, setSuccessMessage]=useState("")
  const onSubmit = (data) =>{
    console.log("User Data :",data)
   
      setSuccessMessage(
       <span>Login successful Welcome, <span className="success-message-user-name">{data.name}!</span> </span>
      )
    reset();

  }
  return (
    <div className="login-container">

      <h2>User Login</h2>
      {successMessage && 
      <div className="success-message">
        {successMessage}
      </div>
      }
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-group">
          <label>Name :</label><br/>
          <input 
          type="text"
          placeholder="Enter your name"
          {...register("name", {required: "Name is required"} )}
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        
        {/* Email */}
        <div className="form-group">
        <label>Email :</label><br/>
        <input 
        type="email"
          placeholder="Enter your email"

        
        {...register("email",{required :"Email is required" , pattern:{value:/^\S+@\S+$/i, message:"Invalid email formate",},})}
        />
        <p className="error">{errors.email?.message}</p>

        </div>

        {/* password */}
        <div className="form-group">
          <label>Password :</label><br/>
          <input 
          type="password"
          placeholder="Enter your password"

          {...register("password")}
          
          />
          <p>{errors.passoword?.message}</p>

        </div>

        <button className="btn">Register</button>
      </form>
    </div>
  )
}
