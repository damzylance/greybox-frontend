import { useNavigate } from "react-router-dom";
import { CancelIcon } from "../../components/icons/Icons";
import AppLayout from "./AppLayout";

const About = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      child={
        <div className="pt-[51px] w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1">
          <div className="flex items-center justify-center relative ">
            <span className="absolute left-[24px]" onClick={() => navigate(-1)}>
              <CancelIcon />
            </span>
            <h2 className=" text-black text-[1.5rem] font-[600]">About</h2>
          </div>
          <p className="text-[1rem] text-black-3 leading-[22px] px-[30px] text-center mt-[50px]">
            Lorem Ipsum is a dummy text Lorem Ipsum is a dummy text Lorem Ipsum
            is a dummy textLorem Ipsum is a dummy textLorem Ipsum is a dummy
            textLorem Ipsum is a dummy textLorem Ipsum is a dummy textLorem
            Ipsum is a dummy textLorem Ipsum is a dummy textLorem Ipsum is a
            dummy textLorem Ipsum is a dummy textLorem Ipsum is a dummy text
          </p>
        </div>
      }
    />
  );
};

export default About;
