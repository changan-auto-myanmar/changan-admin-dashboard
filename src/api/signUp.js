import axios, { setAuthToken } from "./../axios";
import { toast } from "sonner";

const handleSignUp = async (data) => {
  const toastId = toast.loading("Signing up...");
  try {
    const response = await axios.post("api/v1/auth/signup", data);
    toast.success("Sign up successfully!", {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    // console.log(response.data);
    const changanToken = response.data.data.token;
    setAuthToken(changanToken);
    localStorage.setItem("changanToken", changanToken);
    let decodedToken = jwtDecode(changanToken);
    localStorage.setItem("expirationTime", decodedToken.iat * 1000);

    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    console.log(error);
    return error;
  }
};

export default handleSignUp;
