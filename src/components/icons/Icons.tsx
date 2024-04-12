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
export const LockIcon = () => (
  <img src="/images/lock.png" alt="" className=" cursor-pointer" />
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

export const WelcomeIcon = () => (
  <img src="/images/welcome.png" alt="" className=" cursor-pointer" />
);

export const UpdateWalletIcon = () => (
  <img src="/images/updateWallet.png" alt="" className=" cursor-pointer" />
);

export const ChangePinIcon = () => (
  <img src="/images/changePin.png" alt="" className=" cursor-pointer" />
);

export const DeleteIcon = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLImageElement> | undefined;
}) => (
  <img
    src="/images/delete.png"
    alt=""
    className=" cursor-pointer"
    onClick={onClick}
  />
);

export const PlusWhiteIcon = () => (
  <img src="/images/plusWhite.png" alt="" className=" cursor-pointer" />
);

export const PaymentDetailsIcon = () => (
  <img src="/images/paymentDetails.png" alt="" className=" cursor-pointer" />
);

export const AboutIcon = () => (
  <img src="/images/about.png" alt="" className=" cursor-pointer" />
);

export const SignOutIcon = () => (
  <img src="/images/signOut.png" alt="" className=" cursor-pointer" />
);
export const Send = () => (
  <img src="/images/send.png" alt="" className=" cursor-pointer" />
);

export const SendQ = () => (
  <img src="/images/sendq.png" alt="" className=" cursor-pointer" />
);

export const Deposit = () => (
  <img src="/images/deposit.png" alt="" className=" cursor-pointer" />
);

export const Withdraw = () => (
  <img src="/images/withdraw.png" alt="" className=" cursor-pointer" />
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

export const DropDown = () => (
  <img src="/images/arrowDown.png" alt="" className=" cursor-pointer" />
);
export const ArrowForward = () => (
  <img src="/images/arrowForward.png" alt="" className=" cursor-pointer" />
);

export const QRCode = () => (
  <img src="/images/qrCode.svg" alt="" className=" cursor-pointer m-auto" />
);

export const LinkIcon = () => (
  <img
    src="/images/link.png"
    alt=""
    className=" cursor-pointer max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px]"
  />
);
export const ToolIcon = () => (
  <img src="/images/tool.png" alt="" className=" cursor-pointer" />
);

export const TransferIcon = () => (
  <img src="/images/transfer.png" alt="" className=" cursor-pointer" />
);

export const CancelIcon = () => (
  <img src="/images/cancel.png" alt="" className=" cursor-pointer" />
);

export const CancelIconWhite = () => (
  <img src="/images/cancelWhite.png" alt="" className=" cursor-pointer" />
);
export const CopyWhite = () => (
  <img src="/images/copyWhite.png" alt="" className=" cursor-pointer" />
);

export const UserPicture = () => (
  <img
    src="/images/user.svg"
    alt=""
    className=" cursor-pointer w-[80px] h-[80px]"
  />
);

export const GHFlag = () => (
  <img src="/images/ghFlag.png" alt="" className=" w-[12px] h-[9.29px]" />
);

export const NGFlag = () => (
  <img src="/images/ngFlag.png" alt="" className=" w-[12px] h-[9.29px]" />
);

export const USFlag = () => (
  <img src="/images/usFlag.png" alt="" className=" w-[12px] h-[9.29px]" />
);

export const Notification = ({
  current,
  onClick,
}: {
  current: number;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div className="relative" onClick={onClick}>
    <img src="/images/notification.png" alt="" className=" cursor-pointer" />
    <div className="absolute top-[-1px] right-[-1px] h-[16px] w-[16px] rounded-[50%] bg-orange-1 text-white text-[0.5rem] flex items-center justify-center">
      {current}
    </div>
  </div>
);

export const UserLogo = ({
  firstCharacterOfName,
  onClick,
}: {
  firstCharacterOfName: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => (
  <div
    className="h-[40px] w-[40px] rounded-[50%] bg-white text-orange-1 text-[1.5rem] flex items-center justify-center  cursor-pointer"
    onClick={onClick}
  >
    {firstCharacterOfName}
  </div>
);
