import React from "react";
import Button from "../component/Button";

const Logout = ({ history }) => {
  return (
    <>
      <h1>Você Perdeu!</h1>
      <Button
        text="Jogar Novamente"
        onPress={() => history.goBack()}
      ></Button>
    </>
  );
};

export default Logout;
