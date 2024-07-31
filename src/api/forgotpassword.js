import axios from "./../axios";
import { toast } from "sonner";

const forgotPassword = async (data) => {
  const toastId = toast.loading("Sending email...");

  try {
    const response = await axios.post("api/v1/auth/forgot-password", data);
    toast.success("Sent Email!", {
      id: toastId,
      autoClose: 5000, // Auto-close the toast after 5 seconds
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 5000, // Auto-close the toast after 5 seconds
    });
  }
};

export default forgotPassword;
