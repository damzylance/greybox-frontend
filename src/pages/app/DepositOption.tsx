import AppLayout from "../../pages/app/AppLayout";
import { useNavigate } from "react-router-dom";
import { FlatButton } from "../../components/buttons/FlatButton";
import { FormButton } from "../../components/buttons/FormButton";

const DepositOption = () => {
  const navigate = useNavigate();
  return (
    <AppLayout
      child={
        <div className="p-[25px] m-auto w-full h-fit md:w-[50.33%] lg:w-[45.33%] bg-grey-5 rounded-[32px_32px_0px_0px]">
          <FlatButton
            label="Deposit Via Mobile Money"
            extraClass="bg-grey-1 mb-[8px]"
            onClick={() => navigate("/deposit-via-mobile-money")}
          />
          <FlatButton
            label="Deposit Via Paychant"
            extraClass="bg-[transparent] mb-[34px]"
            onClick={() => navigate("/deposit-via-paychant")}
          />
          <FormButton label="Cancel" onClick={() => navigate(-1)} />
        </div>
      }
    />
  );
};

export default DepositOption;
