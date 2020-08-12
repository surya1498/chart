export const validateEmailAddress = (email) => {
  let error = '';
  if (!email) {
    error = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    error = 'Email address is invalid';
  }
  return error;
};

export const validatePassword = (password) => {
  let error = '';
  if (!password) {
    error = 'Password is required';
  } else if (password.length < 8) {
    error = 'Password must be 8 or more characters';
  }
  return error;
};
