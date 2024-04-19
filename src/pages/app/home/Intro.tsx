import { useNavigate } from "react-router-dom";
import { HomeButton } from "../../../components/buttons/HomeButton";
import { IntroLady } from "../../../components/icons/Icons";

const Intro = () => {
  const navigate = useNavigate();
  const Stat = ({
    text,
    subText,
    last,
  }: {
    text: string;
    subText: string;
    last?: boolean;
  }) => (
    <div
      className={`py-[2px] pr-[32px] ${
        last ? "" : "border-r-[2px] border-grey-1"
      }`}
    >
      <p className="text-[1.5rem] text-black-2 font-[600] leading-[24px]">
        {text}
      </p>
      <p className="mt-[8px] text-[1rem] text-black-3 leading-[22px]">
        {subText}
      </p>
    </div>
  );
  return (
    <section className="pb-[50px] bg-pink-1">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-x-[2%]">
        <section className="w-full md:w-[50%] px-[25px] md:pl-[10%] md:px-0">
          <h2 className="max-w-[597px] text-[3rem] font-[700] leading-[66px]">
            Simplifying <span className=" text-orange-1">Cross-border </span>
            Payments in Africa
          </h2>
          <p className="mt-[21px] text-[1.25rem] leading-[27.5px]">
            Move Money Across Borders Seamlessly
          </p>
          <div className="mt-[78px] flex items-center gap-x-[28px]">
            <HomeButton
              label="Learn More"
              onClick={() => {}}
              extraClass="w-[225px] bg-[#fff] text-orange-1"
            />
            <HomeButton
              label="Get Started"
              onClick={() => navigate("/sign-up")}
              extraClass="w-[225px] bg-orange-1 text-[#fff]"
            />
          </div>
          <div className="mt-[108px] flex items-center gap-x-[32px]">
            <Stat text="100k" subText="Lorem Ipsum" />
            <Stat text="150k" subText="Lorem Ipsum" />
            <Stat text="150k" subText="Lorem Ipsum" last />
          </div>
        </section>
        <section className="w-full md:w-[50%]">
          <IntroLady />
        </section>
      </div>
    </section>
  );
};

export default Intro;
