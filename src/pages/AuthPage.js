import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Form from "../components/Form";
import "../styles/AuthPage.css";

const AuthPage = () => {
  const [registrationFormStatus, setRegistrationFormStatus] = useState(false);

  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0,
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500,
  });

  const loginButtonProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px white",
  });
  const registerButtonProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px white"
      : "solid 0px transparent",
  });

  // Fields in the Login form (list of rows, each row can have many column)
  const formDataLogin = [
    [
      { label: "Email", type: "text", name: "email" },
    ],
    [
      { label: "Password", type: "password", name: "password" },
    ],
  ];

  // Field in the Register form (list of rows, each row can have many column)
  const formDataRegister = [
    [
      { label: "First Name", type: "text", name: "firstName" },
      { label: "Email", type: "text", name: "email" },
    ],
    [
      { label: "Password", type: "password", name: "password" },
    ],
    [
      { label: "Country", type: "text", name: "country" },
      { label: "Area", type: "text", name: "area" },
      { label: "City", type: "text", name: "city" },
    ],
  ];

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="nav-buttons">
          <animated.button
            id="loginButton"
            onClick={(e) => setRegistrationFormStatus(false)}
            style={loginButtonProps}
          >
            Login
          </animated.button>
          <animated.button
            id="registerButton"
            onClick={(e) => setRegistrationFormStatus(true)}
            style={registerButtonProps}
          >
            Register
          </animated.button>
        </div>
        <div className="form-group">
          <animated.form action="" id="loginform" style={loginProps}>
            {/* <LoginForm /> */}
            <Form formData={formDataLogin} />
          </animated.form>
          <animated.form action="" id="registerform" style={registerProps}>
            {/* <RegisterForm /> */}
            <Form formData={formDataRegister} />
          </animated.form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
