import { useNavigate } from "react-router-dom";
import { HomeButton } from "../../../components/buttons/HomeButton";
import { AboutLady, FiveStars } from "../../../components/icons/Icons";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="md:py-[50px] pb-[50px] bg-white">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-[2%]">
        <section className="w-full md:w-[50%] flex justify-center px-[25px] md:pl-[10%] md:px-0">
          <AboutLady />
        </section>
        <section className="w-full md:w-[50%] px-[25px] md:pl-[25px] md:pr-[80px] flex flex-col md:block">
          <h2 className="text-[1.125rem] text-orange-1 font-[700] leading-[24.75px]">
            ABOUT US
          </h2>
          <p className="text-[2rem] text-black-2 font-[700] leading-[40.63px] max-w-[456px] mt-[12px]">
            Trusted Platform Anytime & Anywhere
          </p>
          <div className="my-[26px]">
            <FiveStars />
          </div>
          <p className="text-[1rem] text-justify text-black-3 leading-[22px] max-w-[548px]">
            At Greybox Technologies, Inc., we're passionate about transforming
            the way businesses and individuals in Africa manage their finances.
            Our mission is to provide a reliable, low-cost solution for
            cross-border payments and remittances.
          </p>
          <HomeButton
            label="Learn More"
            onClick={() => {}}
            extraClass="text-white bg-orange-1 border-white w-[204px] mt-[42px]"
          />
        </section>
      </div>
    </section>
  );
};

export default About;
