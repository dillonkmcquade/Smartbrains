import React from "react";

const signInSignUp = () => {
  return (
    <Switch>
      <Route to="/signin" component={Signin} />
      <Route to="/register" component={Register} />
    </Switch>
  );
};
