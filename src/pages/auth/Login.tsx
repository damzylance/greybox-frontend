import AuthLayout from "./AuthLayout";
import { BackArrow, LockOpen, Mail } from "../../components/icons/Icons";
import { TextInput } from "../../components/inputs/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { FormButton } from "../../components/buttons/FormButton";

const Login = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      child={
        <div className="w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1 p-[51px_25px]">
          <BackArrow />
          <h2 className=" text-[2.5rem] text-black-1 font-[700] mt-[50px] leading-[40px]">
            Welcome Back!
          </h2>
          <p className="mt-[13px] text-[0.875rem] text-black-2">
            Fill in the details below, to create your account.
          </p>
          <form className="mt-[24px]">
            <section className="flex flex-col gap-y-[32px]">
              <TextInput
                placeholder="Email Address"
                type="email"
                onChange={() => {}}
                img={<Mail />}
              />
              <TextInput
                placeholder="Password"
                type="password"
                onChange={() => {}}
                img={<LockOpen />}
              />
            </section>
            <Link
              to={"/forgot-password"}
              className="text-[0.75rem] text-black-3 leading-[12px] mt-[12px]"
            >
              Forgot Password?
            </Link>

            <FormButton
              label="Continue"
              onClick={() => {
                navigate("/dashboard");
              }}
              extraClass="mt-[72px]"
            />
            <section className="flex flex-col gap-y-[8px] mt-[55px]">
              <p className="text-[0.875rem] text-black-3 leading-[18px]">
                Don't Have an Account?
              </p>
              <Link
                to={"/sign-up"}
                className=" text-[0.875rem] text-orange-1 leading-[18px] font-[700]"
              >
                Signup here &gt;
              </Link>
            </section>
          </form>
        </div>
      }
    />
  );
};

export default Login;
