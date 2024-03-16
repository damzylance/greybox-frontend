import { useNavigate } from "react-router-dom";
import { CancelIcon, QRCode } from "../../components/icons/Icons";
import AppLayout from "./AppLayout";

const Receive = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      child={
        <div className="pt-[51px] w-full md:w-[50.33%] lg:w-[45.33%] min-h-[100vh] bg-grey-1">
          <div className="flex items-center justify-center relative ">
            <span className="absolute left-[24px]" onClick={() => navigate(-1)}>
              <CancelIcon />
            </span>
            <h2 className=" text-black text-[1.5rem] font-[600]">QR Detail</h2>
          </div>
          <p className="text-black text-[1rem] leading-[22px] text-center mt-[83px] mb-[32px]">
            Scan with Greybox App
          </p>
          <QRCode />
          <p className="text-black text-[1rem] font-[600] leading-[22px] text-center mt-[48px]">
            Adeyinka Lorem
          </p>
          <p className="text-black text-[0.875rem] leading-[22px] text-center mt-[22px]">
            081-0938-9289
          </p>
        </div>
      }
    />
  );
};

export default Receive;
