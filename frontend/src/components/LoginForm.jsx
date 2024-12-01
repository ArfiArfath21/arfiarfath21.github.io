import React from "react";
import Input from "./Input";
import Submit from "./Submit";

function LoginForm(props) {
  console.log(props.isRegistered);
  return (
    <form action="/login" method="post">
      <Input name="email" placeholder="Email" type="text" />
      <Input name="password" placeholder="Password" type="password" />
      {!(props.isRegistered) && <Input name="confirmPassword" placeholder="Confirm Password" type="password" />}
      <Submit text={props.isRegistered ? "Login" : "Register"} />
    </form>
  );
}

export default LoginForm;
