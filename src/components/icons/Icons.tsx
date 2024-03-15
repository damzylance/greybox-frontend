import { useNavigate } from "react-router-dom";

export const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <img
      src="/images/back.png"
      alt=""
      onClick={() => navigate(-1)}
      className=" cursor-pointer"
    />
  );
};

export const Mail = () => (
  <img src="/images/mail.png" alt="" className=" cursor-pointer" />
);

export const LockOpen = () => (
  <img src="/images/lockOpen.png" alt="" className=" cursor-pointer" />
);
export const Person = () => (
  <img src="/images/person.png" alt="" className=" cursor-pointer" />
);
export const Success = () => (
  <img src="/images/success.svg" alt="" className=" cursor-pointer" />
);
export const Home = () => (
  <img src="/images/home.png" alt="" className=" cursor-pointer" />
);
export const Send = () => (
  <img src="/images/send.png" alt="" className=" cursor-pointer" />
);

export const Cards = () => (
  <img src="/images/cards.png" alt="" className=" cursor-pointer" />
);

export const Wallet = () => (
  <img src="/images/wallet.png" alt="" className=" cursor-pointer" />
);

export const More = () => (
  <img src="/images/more.png" alt="" className=" cursor-pointer" />
);

export const LinkIcon = () => (
  <img src="/images/link.png" alt="" className=" cursor-pointer" />
);
export const ToolIcon = () => (
  <img src="/images/tool.png" alt="" className=" cursor-pointer" />
);

export const CancelIcon = () => (
  <img src="/images/cancel.png" alt="" className=" cursor-pointer" />
);

export const Notification = ({ current }: { current: number }) => (
  <div className="relative">
    <img src="/images/notification.png" alt="" className=" cursor-pointer" />
    <div className="absolute top-[-1px] right-[-1px] h-[16px] w-[16px] rounded-[50%] bg-orange-1 text-white text-[0.5rem] flex items-center justify-center">
      {current}
    </div>
  </div>
);

export const UserLogo = ({
  firstCharacterOfName,
}: {
  firstCharacterOfName: string;
}) => (
  <div className="h-[40px] w-[40px] rounded-[50%] bg-white text-orange-1 text-[1.5rem] flex items-center justify-center">
    {firstCharacterOfName}
  </div>
);
