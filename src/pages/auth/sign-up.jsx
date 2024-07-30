import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import handleSignUp from "@/api/signUp";

export function SignUp() {
  const navigate = useNavigate();
  const [domainName, setDomainName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const role = "user";

  const handleSubmit = async () => {
    const data = {
      domainName,
      email,
      password,
      confirmPassword,
      role,
    };
    const res = await handleSignUp(data);
    console.log(res);
    if (res.statusCode === 201) {
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    }
  };

  return (
    <section className="mx-8 flex">
      <div className="w-2/5 mt-8 hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-[500px] w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-5 flex flex-col gap-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your Domain
            </Typography>
            <Input
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              size="lg"
              placeholder="name.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="mb-5 flex flex-col gap-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
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

          <div className="mb-5 flex flex-col gap-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                placeholder="Pls enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>

          <div className="mb-1 flex flex-col gap-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Confirm Password
            </Typography>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="lg"
                placeholder="Pls re-enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
            {confirmPassword && confirmPassword !== password && (
              <span className="text-red-500 text-sm">
                Passwords do not match
              </span>
            )}
          </div>

          <Button className="mt-6" fullWidth onClick={() => handleSubmit()}>
            Register Now
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
