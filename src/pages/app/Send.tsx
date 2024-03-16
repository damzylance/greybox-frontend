import { useNavigate } from "react-router-dom";
import { CancelIcon, DropDown } from "../../components/icons/Icons";
import AppLayout from "./AppLayout";
import {
  InputInfoLabel,
  InputLabel,
  TextInput,
} from "../../components/inputs/TextInput";
import { FormButton } from "../../components/buttons/FormButton";

const Send = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      child={
        <div className="pt-[51px] w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1">
          <div className="flex items-center justify-center relative ">
            <span className="absolute left-[24px]" onClick={() => navigate(-1)}>
              <CancelIcon />
            </span>{" "}
            <h2 className=" text-black text-[1.5rem] font-[600]">Send</h2>
          </div>
          <p className="text-black-3 text-[0.75rem] text-center">(Bal $0.00)</p>
          <form className="mt-[29px] px-[24px] pb-[80px]">
            <section className="flex flex-col gap-y-[32px]">
              <div>
                <InputLabel text="Recipients Name" />
                <TextInput
                  placeholder="Enter official recipient name"
                  type="text"
                  onChange={() => {}}
                />
              </div>
              <div>
                <InputLabel text="Recipients Bank" />
                <TextInput
                  placeholder="Select bank"
                  readOnly
                  type="text"
                  onClick={() => {}}
                  img={<DropDown />}
                />
              </div>
              <div>
                <InputLabel text="Recipients Account number/Phone number" />
                <TextInput
                  placeholder="Enter recipient Account number or phone number"
                  type="text"
                  onChange={() => {}}
                />
              </div>
              <div>
                <InputLabel text="Currency recipient will get" />
                <TextInput
                  placeholder="Select currency"
                  readOnly
                  type="text"
                  onClick={() => {}}
                  img={<DropDown />}
                />
              </div>
              <div>
                <InputLabel text="Amount to send" />
                <TextInput placeholder="0" type="text" onChange={() => {}} />
                <InputInfoLabel title="Exchange Rate" value="1cUSD = USD" />
              </div>
              <div>
                <InputLabel text="Recipient will get" />
                <TextInput
                  placeholder="₦ Amount to send"
                  type="text"
                  onChange={() => {}}
                />
                <InputInfoLabel title="Transaction fee" value="$0.000" />
              </div>
            </section>
            <FormButton
              label="Submit Request"
              extraClass="mt-[80px]"
              onClick={() => {}}
            />
          </form>
        </div>
      }
    />
  );
};

export default Send;
