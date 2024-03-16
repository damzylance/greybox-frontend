import AuthLayout from "./AuthLayout";
import { BackArrow } from "../../components/icons/Icons";
import { TextInput } from "../../components/inputs/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { FormButton } from "../../components/buttons/FormButton";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout
      child={
        <div className="w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1 p-[51px_25px]">
          <BackArrow />
          <h2 className=" text-[2.5rem] text-black-1 font-[700] mt-[50px] leading-[40px]">
            OTP Sent!
          </h2>
          <p className="mt-[13px] text-[0.875rem] text-black-2">
            Enter the 4-digit code sent to you at +234-8209-2798
          </p>
          <form className="mt-[24px]">
            <section className="flex gap-x-[17px] mt-[24px] ">
              <TextInput
                placeholder="1"
                type="text"
                isSmall
                onChange={() => {}}
              />
              <TextInput
                placeholder="2"
                type="text"
                isSmall
                onChange={() => {}}
              />
              <TextInput
                placeholder="3"
                type="text"
                isSmall
                onChange={() => {}}
              />
              <TextInput
                placeholder="4"
                type="text"
                isSmall
                onChange={() => {}}
              />
            </section>

            <FormButton
              label="Resend OTP"
              onClick={() => {
                navigate("/recover-password");
              }}
              extraClass="mt-[74px]"
            />
            <section className="flex flex-col gap-y-[8px] mt-[30px]">
              <Link
                to={""}
                className=" text-[0.875rem] text-orange-1 leading-[18px] font-[700]"
              >
                I didn’t receive code
              </Link>
            </section>
          </form>
        </div>
      }
    />
  );
};

export default VerifyOtp;
