import { Modal } from "@mui/material";
import AppLayout from "../../pages/app/AppLayout";
import { FlatButton } from "../buttons/FlatButton";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../buttons/FormButton";

const DepositOption = ({
  state,
  onClose,
}: {
  state: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={state}
      onClose={onClose}
      className=" bg-grey-box-bg bg-cover bg-no-repeat flex justify-center"
    >
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
            <FormButton label="Cancel" onClick={onClose} />
          </div>
        }
      />
    </Modal>
  );
};

export default DepositOption;
