import React from "react";
import Button from "../component/Button";

const Login = (props) => {
  return (
    <>
      <input type="text" placeholder="login"></input>
      <input type="password" placeholder="senha"></input>
      <Button text="Entrar" onPress={() => props.history.push("/game")}></Button>
    </>
  );
};

export default Login;
