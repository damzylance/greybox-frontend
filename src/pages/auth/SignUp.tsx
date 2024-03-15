import { useRef, useState } from "react";
import AuthLayout from "./AuthLayout";
import {
  BackArrow,
  LockOpen,
  Mail,
  Person,
} from "../../components/icons/Icons";
import { TextInput } from "../../components/inputs/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { FormButton } from "../../components/buttons/FormButton";
import { SelectInput } from "../../components/inputs/SelectInput";

const SignUp = () => {
  const [currency, setCurrency] = useState<string | null>(null);
  const [openCurrency, setOpenCurrency] = useState<Boolean>(false);
  const currencyRef = useRef<HTMLUListElement>(null);
  const currencyIconRef = useRef<HTMLImageElement>(null);

  const [country, setCountry] = useState<string | null>(null);
  const [openCountry, setOpenCountry] = useState<Boolean>(false);
  const countryRef = useRef<HTMLUListElement>(null);
  const countryIconRef = useRef<HTMLImageElement>(null);

  const navigate = useNavigate();

  return (
    <AuthLayout
      child={
        <div className="w-[29.0625rem] lg:w-[36.33%] min-h-[100vh] bg-grey-1 p-[51px_25px]">
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
              <SelectInput
                pOnclick={() => setOpenCurrency(!openCurrency)}
                cOnclick={(list) => {
                  setCurrency(list);
                  setOpenCurrency(false);
                }}
                open={openCurrency}
                value={currency}
                fValue="Currency"
                cList={[
                  "United States Dollar",
                  "Ghana Cedis",
                  "Nigerian Naira",
                ]}
                width="100%"
                mainRef={currencyRef}
                subRef={currencyIconRef}
                setFunc={setOpenCurrency}
                setStatusFunc={setCurrency}
              />
              <SelectInput
                pOnclick={() => setOpenCountry(!openCountry)}
                cOnclick={(list) => {
                  setCountry(list);
                  setOpenCountry(false);
                }}
                open={openCountry}
                value={country}
                fValue="Country"
                cList={["Ghana", "Nigeria", "South Africa"]}
                width="100%"
                mainRef={countryRef}
                subRef={countryIconRef}
                setFunc={setOpenCountry}
                setStatusFunc={setCountry}
              />
              <TextInput
                placeholder="Password"
                type="password"
                onChange={() => {}}
                img={<LockOpen />}
              />
            </section>
            <Link
              to={"/recover-password"}
              className="text-[0.75rem] text-black-3 leading-[12px] mt-[12px]"
            >
              Forgot Password ?
            </Link>

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
                to={"/"}
                className=" text-[0.875rem] text-orange-1 leading-[18px] font-[700]"
              >
                Login here &gt;
              </Link>
            </section>
          </form>
        </div>
      }
    />
  );
};

export default SignUp;
