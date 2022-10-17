export const validate = (state, type) => {
  const errors = {};

  if (!state.name.trim()) {
    errors.name = "Name required";
  } else {
    delete errors.name;
  }

  if (!state.password) {
    errors.password = "Password required";
  } else if (state.password.length < 6) {
    errors.password = "Password must has more than 6 characters";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!state.email) {
      errors.email = "Email required";
      console.log("email required");
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is not valid";
      console.log("email validation");
    } else {
      delete errors.email;
      console.log("email error deleted");
    }

    if (!state.confirmPassword) {
      errors.confirmPassword = "confirm the Password";
    } else if (state.confirmPassword.length < 6) {
      errors.confirmPassword =
        "confirmPassword must has more than 6 characters";
    } else if (state.confirmPassword !== state.password) {
      errors.confirmPassword = "Password don't match";
    } else {
      delete errors.confirmPassword;
    }

    if (!state.isAccepted) {
      errors.isAccepted = "You must accept our regulations";
    } else {
      delete errors.isAccepted;
    }
  }

  return errors;
};
