import { useForm } from "react-hook-form";
import "./Login.css";
import { useState } from "react";

export default function Resgister() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  // Get password value
  const password = watch("password");

  const [successMessage, setSuccessMessage] = useState("");

  // Form Submit
  const onSubmit = (data) => {

    console.log("User Data :", data);

    setSuccessMessage(
      <span>
        Registration successful! Welcome,{" "}
        <span className="success-message-user-name">
          {data.name}!
        </span>
      </span>
    );

    // Clear form
    reset();
  };

  return (
    <div className="login-container">

      <h2>User Registration</h2>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <form
        className="login-form"
        onSubmit={handleSubmit(onSubmit)}
      >

        {/* ================= NAME ================= */}

        <div className="form-group">

          <label>Name :</label>
          <br />

          <input
            type="text"
            placeholder="Enter your name"

            {...register("name", {
              required: "Name is required"
            })}
          />

          <p className="error">
            {errors.name?.message}
          </p>

        </div>


        {/* ================= EMAIL ================= */}

        <div className="form-group">

          <label>Email :</label>
          <br />

          <input
            type="email"
            placeholder="Enter your email"

            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />

          <p className="error">
            {errors.email?.message}
          </p>

        </div>


        {/* ================= PASSWORD ================= */}

        <div className="form-group">

          <label>Password :</label>
          <br />

          <input
            type="password"
            placeholder="Enter your password"

            {...register("password", {
              required: "Password is required",

              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />

          <p className="error">
            {errors.password?.message}
          </p>

        </div>


        {/* ================= CONFIRM PASSWORD ================= */}

        <div className="form-group">

          <label>Confirm Password :</label>
          <br />

          <input
            type="password"
            placeholder="Confirm your password"

            {...register("confirmPassword", {

              required: "Please confirm your password",

              validate: (value) =>
                value === password ||
                "Passwords do not match"

            })}
          />

          <p className="error">
            {errors.confirmPassword?.message}
          </p>

        </div>


        {/* ================= REGISTER BUTTON ================= */}

        <button
          type="submit"
          className="btn"
        >
          Register
        </button>

      </form>

    </div>
  );
}