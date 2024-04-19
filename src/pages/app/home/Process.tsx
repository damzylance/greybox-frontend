import { useNavigate } from "react-router-dom";
import { HomeButton } from "../../../components/buttons/HomeButton";
import { IntroLady, ProcessGuy } from "../../../components/icons/Icons";

const Process = () => {
  const navigate = useNavigate();
  const ProcessCard = ({
    sn,
    text,
    subText,
    last,
  }: {
    sn: string;
    text: string;
    subText: string;
    last?: boolean;
  }) => (
    <section>
      <div className="flex items-center gap-x-[25px]">
        <div className="min-w-[40.57px] h-[42px] rounded-[4px] bg-orange-3 flex items-center justify-center text-[1.25rem] text-orange-1 font-[700]">
          {sn}
        </div>
        <div>
          <p className="text-[1rem] text-black-2 font-[700] leading-[22px]">
            {text}
          </p>
          <p className="text-[0.875rem] md:text-[1rem] text-black-3 leading-[22px] mt-[3px] text-nowrap">
            {subText}
          </p>
        </div>
      </div>
      {!last && <img src="/images/vLine.svg" alt="" className="ml-[19px]" />}
    </section>
  );
  return (
    <section className="pb-[50px] bg-white px-[25px] md:px-[5%] lg:px-[10%]">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-x-[2%]">
        <section className="w-full md:w-[50%] ">
          <h2 className="text-[1.125rem] text-orange-1 font-[700] leading-[24.75px]">
            OUR PROCESS
          </h2>
          <p className="max-w-[456px] text-[2rem] text-black-2 font-[700] leading-[40.63px] mt-[12px] ">
            Using Greybox is as simple as this three steps:
          </p>
          <div className="mt-[72px]">
            <ProcessCard
              sn="01."
              text="Sign up"
              subText="Sign up to create your greybox account"
            />
            <ProcessCard
              sn="02."
              text="Deposit"
              subText="Fund your account with stable coins"
            />
            <ProcessCard
              sn="03."
              text="Send"
              subText="Send funds to your loved ones Accross Africa"
              last
            />
          </div>
        </section>
        <section className="flex justify-center">
          <ProcessGuy />
        </section>
      </div>
    </section>
  );
};

export default Process;
