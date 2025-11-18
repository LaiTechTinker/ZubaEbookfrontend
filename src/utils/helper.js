// Validate Email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Password
// Example rules: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number
export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};


// Optional: Combine validation
export const validateLogin = (email, password) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return {
    isEmailValid,
    isPasswordValid,
    isValid: isEmailValid && isPasswordValid,
  };
};
