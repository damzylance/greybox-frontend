import { Modal } from "@mui/material";
import { CancelIcon } from "../icons/Icons";
import { allTransactionData } from "../../utils/Dummies";
import { DateHead, TransactionHistoryCard } from "../Cards";
import AppLayout from "../../pages/app/AppLayout";

const AllTransactionModal = ({
  state,
  onClose,
}: {
  state: boolean;
  onClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | any
    | undefined;
}) => {
  return (
    <Modal
      open={state}
      onClose={onClose}
      className=" bg-grey-box-bg bg-cover bg-no-repeat flex justify-center"
    >
      <AppLayout
        child={
          <div className="pt-[51px] w-[29.0625rem] lg:w-[36.33%] min-h-[100vh] bg-grey-1">
            <div className="flex items-center justify-center relative ">
              <span className="absolute left-[24px]" onClick={onClose}>
                <CancelIcon />
              </span>{" "}
              <h2 className=" text-black text-[1.5rem] font-[600]">
                Transaction History
              </h2>
            </div>
            {allTransactionData?.map((deposit) => {
              return (
                <div key={deposit.id}>
                  <DateHead date={deposit.date} />
                  {deposit.details.map((details, index) => {
                    return (
                      <TransactionHistoryCard
                        label={details.label}
                        status={details.status}
                        channel={details.channel}
                        time={details.time}
                        amount={details.amount}
                        index={index}
                        length={deposit.details.length}
                        onClick={() => {}}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        }
      />
    </Modal>
  );
};

export default AllTransactionModal;
