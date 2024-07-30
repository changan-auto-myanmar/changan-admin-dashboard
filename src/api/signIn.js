import axios, { setAuthToken } from "./../axios";
import { toast } from "sonner";

const handleLogin = async (data) => {
  try {
    const response = await axios.post("api/v1/auth/login", data);
    console.log(response.data);
    const changanToken = response.data.token;
    setAuthToken(changanToken);
    localStorage.setItem("authToken", changanToken);

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default handleLogin;
