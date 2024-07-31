import axios, { setAuthToken } from "./../axios";
import { toast } from "sonner";

const handleLogin = async (data) => {
  const toastId = toast.loading("Logging in...");
  try {
    const response = await axios.post("api/v1/auth/login", data);
    console.log(response.data);
    toast.success("Logged in successfully!", {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
    const changanToken = response.data.token;
    setAuthToken(changanToken);
    localStorage.setItem("authToken", changanToken);

    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 500, // Auto-close the toast after 5 seconds
    });
  }
};

export default handleLogin;
