import { Link, useNavigate } from "react-router-dom";
import { HomeButton } from "../../../components/buttons/HomeButton";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  LogoTextIcon,
  MailFIcon,
  PhoneIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../../../components/icons/Icons";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[500px] bg-pink-1 pt-[100px] px-[25px] md:px-[5%] lg:px-[10%]">
      <section className="w-full p-[54px_25px] bg-orange-1 text-white rounded-[24px] flex flex-col items-center">
        <h2 className="text-center text-[2.5rem] font-[600] leading-[51.43px]">
          Get started with Greybox now !
        </h2>
        <p className=" text-center text-[1rem] leading-[22px] max-w-[631px] mt-[26px] mb-[65px]">
          Ready to experience hassle-free cross-border payments? Sign up for a
          Greybox account today and reimagine the way you move money.
        </p>
        <HomeButton
          label="Get Started"
          onClick={() => navigate("/sign-up")}
          extraClass="border-white w-[204px]"
        />
      </section>

      <section className="w-full flex justify-between flex-wrap gap-[50px] mt-[104px]">
        <div>
          <LogoTextIcon />
          <p className="text-[1rem] text-black-3 leading-[22px] max-w-[218px]">
            Lorem Ipsum is a dummy text,Lorem Ipsum
          </p>
          <div className="flex items-center gap-x-[24px] mt-[14px]">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <WhatsappIcon />
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[1.25rem] text-black-2 font-[600] leading-[20px] mb-[10px]">
            Useful Links
          </h3>
          <Link to={"/"} className="text-[1rem] text-black-3 leading-[22px]">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[1rem] text-black-3 leading-[22px]"
          >
            Home
          </Link>
          <Link
            to={"/contact"}
            className="text-[1rem] text-black-3 leading-[22px]"
          >
            Home
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[1.25rem] text-black-2 font-[600] leading-[20px] mb-[10px]">
            Explore
          </h3>
          <Link to={""} className="text-[1rem] text-black-3 leading-[22px]">
            Terms & Condition
          </Link>
          <Link to={""} className="text-[1rem] text-black-3 leading-[22px]">
            Features
          </Link>
          <Link to={""} className="text-[1rem] text-black-3 leading-[22px]">
            Features
          </Link>
        </div>

        <div>
          <h3 className="text-[1.25rem] text-black-2 font-[600] leading-[20px] mb-[10px]">
            Contact
          </h3>
          <div className="flex text-[1rem] text-black-3 leading-[22px] gap-x-[8px]">
            <LocationIcon /> 6b, Lorem ipsum road, London
          </div>
          <div className="flex text-[1rem] text-black-3 leading-[22px] gap-x-[8px]">
            <MailFIcon /> LoremIpsum@gmail.com
          </div>
          <div className="flex text-[1rem] text-black-3 leading-[22px] gap-x-[8px]">
            <PhoneIcon /> Phone number
          </div>
        </div>
      </section>

      <section className="text-center text-black-3 text-[0.875rem] leading-[18px] p-[36px_25px]">
        Copyright © 2024. All rights reserved.
      </section>
    </section>
  );
};

export default Footer;
