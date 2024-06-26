import AuthLayout from "./AuthLayout";
import {
  BackArrow,
  DropDown,
  LockOpen,
  Mail,
  Person,
} from "../../components/icons/Icons";
import { TextInput } from "../../components/inputs/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { FormButton } from "../../components/buttons/FormButton";
import { useState } from "react";
import SelectBox from "../../components/modals/SelectBox";
import { countryData, currencyData } from "../../utils/Dummies";

const SignUp = () => {
  const navigate = useNavigate();
  const [openCurrency, setOpenCurrency] = useState<boolean>(false);
  const [openCountry, setOpenCountry] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  return (
    <AuthLayout
      child={
        <div className="w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1 p-[51px_25px]">
          <BackArrow />
          <h2 className=" text-[2.5rem] text-black-1 font-[700] mt-[50px] leading-[40px]">
            Sign up
          </h2>
          <p className="mt-[13px] text-[0.875rem] text-black-2">
            Fill in the details below, to create your account.
          </p>
          <form className="mt-[24px]">
            <section className="flex flex-col gap-y-[32px]">
              <TextInput
                placeholder="Full Name"
                type="text"
                onChange={() => {}}
                img={<Person />}
              />
              <TextInput
                placeholder="Email Address"
                type="email"
                onChange={() => {}}
                img={<Mail />}
              />
              <TextInput
                placeholder="Currency"
                readOnly
                type="text"
                onClick={() => {
                  setOpenCurrency(true);
                }}
                img={<DropDown />}
                value={currency}
              />
              <TextInput
                placeholder="Country"
                readOnly
                type="text"
                onClick={() => {
                  setOpenCountry(true);
                }}
                img={<DropDown />}
                value={country}
              />
              <TextInput
                placeholder="Password"
                type="password"
                onChange={() => {}}
                img={<LockOpen />}
              />
            </section>

            <FormButton
              label="Continue"
              onClick={() => {
                navigate("/welcome");
              }}
              extraClass="mt-[72px]"
            />
            <section className="flex flex-col gap-y-[8px] mt-[55px]">
              <p className="text-[0.875rem] text-black-3 leading-[18px]">
                Already Have an Account?
              </p>
              <Link
                to={"/sign-in"}
                className=" text-[0.875rem] text-orange-1 leading-[18px] font-[700]"
              >
                Login here &gt;
              </Link>
            </section>

            <SelectBox
              state={openCurrency}
              title="Select Currency"
              placeholder="Search Currency"
              childList={currencyData}
              onPickChild={(name) => setCurrency(name)}
              onClose={() => setOpenCurrency(false)}
            />
            <SelectBox
              state={openCountry}
              title="Select Country"
              placeholder="Search Country"
              childList={countryData}
              onPickChild={(name) => setCountry(name)}
              onClose={() => setOpenCountry(false)}
            />
          </form>
        </div>
      }
    />
  );
};

export default SignUp;
