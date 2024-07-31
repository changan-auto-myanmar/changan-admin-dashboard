import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import forgotPassword from "../../api/forgotpassword";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const data = {
      email,
    };
    const res = await forgotPassword(data);
    if (res) {
      setMessage(res.message);
    }
  };

  return (
    <section className="">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        {!message && (
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              Forgot Password?
            </Typography>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="text-lg font-normal"
            >
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </Typography>
            <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
              <div className="mb-1 flex flex-col gap-6">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <Button className="mt-6" fullWidth onClick={handleSubmit}>
                Request Password Reset
              </Button>

              <Typography
                variant="paragraph"
                className="text-center text-blue-gray-500 font-medium mt-4"
              >
                Don't have an account?
                <Link to="/auth/sign-up" className="text-gray-900 ml-1">
                  Create account
                </Link>
              </Typography>
            </form>
          </div>
        )}
        {message && (
          <div className="mt-8">
            <Typography
              variant="paragraph"
              className="text-center text-blue-gray-500 font-medium mt-4"
            >
              {message}
            </Typography>
            <a
              href="mailto:example@example.com"
              className="block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 w-full text-center mt-4"
              fullWidth
            >
              Open Your Mail Box
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default ForgotPassword;
