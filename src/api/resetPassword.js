import axios from "./../axios";
import { toast } from "sonner";

const resetPassword = async (data) => {
  const toastId = toast.loading("Resetting password...");
  console.log(data);
  try {
    const response = await axios.post(
      "api/v1/auth/reset-password/" + data.token,
      {
        password: data.password,
        confirmPassword: data.confirmPassword,
      }
    );
    console.log(response.data);
    toast.success("Password reset successfully!", {
      id: toastId,
      autoClose: 5000, // Auto-close the toast after 5 seconds
    });

    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      id: toastId,
      autoClose: 5000, // Auto-close the toast after 5 seconds
    });
  }
};

export default resetPassword;
