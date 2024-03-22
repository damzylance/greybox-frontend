import { useNavigate } from "react-router-dom";
import { CancelIcon, DropDown } from "../../components/icons/Icons";
import AppLayout from "./AppLayout";
import {
  InputInfoLabel,
  InputLabel,
  TextInput,
} from "../../components/inputs/TextInput";
import { FormButton } from "../../components/buttons/FormButton";
import SelectBox from "../../components/modals/SelectBox";
import { banksData } from "../../utils/Dummies";
import { useState } from "react";

const MobileMoneyWithdrawal = () => {
  const navigate = useNavigate();
  const [bank, setBank] = useState<string>("");
  const [openBank, setOpenBank] = useState<boolean>(false);
  return (
    <AppLayout
      child={
        <div className="pt-[51px] w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1">
          <div className="flex items-center justify-center relative ">
            <span className="absolute left-[24px]" onClick={() => navigate(-1)}>
              <CancelIcon />
            </span>
            <h2 className=" text-black text-[1.5rem] font-[600]">Withdraw</h2>
          </div>
          <p className="text-black-3 text-[0.75rem] text-center">(Bal $0.00)</p>
          <form className="mt-[29px] px-[24px] pb-[80px]">
            <section className="flex flex-col gap-y-[32px]">
              <div>
                <InputLabel text="Name" />
                <TextInput
                  placeholder="Enter official name"
                  type="text"
                  onChange={() => {}}
                />
              </div>
              <div>
                <InputLabel text="Bank Account" />
                <TextInput
                  placeholder="Select from saved bank account"
                  readOnly
                  type="text"
                  value={bank}
                  onClick={() => {
                    setOpenBank(true);
                  }}
                  img={<DropDown />}
                />
              </div>

              <div>
                <InputLabel text="Amount" />
                <TextInput placeholder="0" type="text" onChange={() => {}} />
                <InputInfoLabel title="Transaction Rate" value="1cUSD = USD" />
              </div>
              <div>
                <InputLabel text="Recipient will get" />
                <TextInput
                  placeholder="0 cUSD"
                  type="text"
                  onChange={() => {}}
                />
              </div>
            </section>
            <FormButton
              label="Submit Request"
              extraClass="mt-[80px]"
              onClick={() => {}}
            />
            <SelectBox
              state={openBank}
              title="Select Bank"
              placeholder="Search Bank"
              childList={banksData}
              onPickChild={(name) => setBank(name)}
              onClose={() => setOpenBank(false)}
            />
          </form>
        </div>
      }
    />
  );
};

export default MobileMoneyWithdrawal;
