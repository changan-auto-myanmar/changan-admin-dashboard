import axios, { setAuthToken } from "./../axios";
import { toast } from "sonner";

const handleSignUp = async (data) => {
  try {
    const response = await axios.post("api/v1/auth/signup", data);
    console.log(response.data);
    const changanToken = response.data.token;
    setAuthToken(changanToken);
    localStorage.setItem("authToken", changanToken);

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
    console.log(error.response.status);
  }
};

export default handleSignUp;
