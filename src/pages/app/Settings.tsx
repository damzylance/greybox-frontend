import { useNavigate } from "react-router-dom";
import { SettingsCard } from "../../components/Cards";
import {
  CancelIconWhite,
  CopyWhite,
  UserPicture,
} from "../../components/icons/Icons";
import { SettingsData } from "../../utils/Dummies";
import AppLayout from "./AppLayout";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      child={
        <div className="w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1">
          <section className="bg-orange-1 pt-[28px] pb-[40px]">
            <div className="flex items-center justify-center relative ">
              <span
                className="absolute left-[24px]"
                onClick={() => navigate(-1)}
              >
                <CancelIconWhite />
              </span>{" "}
              <h2 className=" text-white text-[1.5rem] font-[600]">Settings</h2>
            </div>
            <div className="w-full flex items-center pl-[29px] mt-[44px] gap-x-[45px]">
              <UserPicture />{" "}
              <div>
                <p className="text-white text-[1rem] leading-[22px]">
                  Lorem Ipsum
                </p>
                <p className="flex items-center gap-x-[17px] text-white text-[0.75rem] leading-[12px]">
                  oifoo4i3049420fjrjnvzn wi3904 <CopyWhite />
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-y-[32px] mt-[47px]">
            {SettingsData().map((note, index) => (
              <SettingsCard
                key={index}
                text={note.text}
                subText={note.subText}
                onClick={note.onClick}
              />
            ))}
          </section>
        </div>
      }
    />
  );
};

export default Settings;
