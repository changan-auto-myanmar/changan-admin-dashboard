// Function to check if the token is expired
const isTokenExpired = () => {
  const token = localStorage.getItem("changanToken");
  const expirationTime = localStorage.getItem("expirationTime");

  if (!token || !expirationTime) {
    // If token or expiration time is not found, token is considered expired
    return true;
  }

  // Convert expiration time to milliseconds
  const now = Date.now();
  const expirationTimeMs = new Date(expirationTime).getTime();
  console.log("exp wrok");

  // Check if current time is greater than expiration time
  return now > expirationTimeMs;
};

// Function to handle token expiration
const handleTokenExpiration = () => {
  if (isTokenExpired()) {
    // If token is expired, redirect to the login page
    // Replace '/login' with the actual login page route
    window.location.href = "/auth/sign-in";
  }
};

// Call the function to handle token expiration before making any authenticated requests
export default handleTokenExpiration;
