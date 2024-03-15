import { Link } from "react-router-dom";
import { Notification, UserLogo } from "../../components/icons/Icons";
import AppLayout from "./AppLayout";
import { useState } from "react";
import { depositData } from "../../utils/Dummies";
import { DateHead, DetailsCard, QuickLink } from "../../components/Cards";
import AllTransactionModal from "../../components/modals/AllTransactionModal";

const Dashboard = () => {
  const [tab, setTab] = useState<"deposits" | "withdrawals" | "history">(
    "deposits"
  );

  const [openAllTransaction, setOpenAllTransaction] = useState<boolean>(false);

  return (
    <AppLayout
      child={
        <div className="w-[29.0625rem] lg:w-[36.33%] min-h-[100vh] bg-grey-2 p-[51px_25px]">
          <section className="w-full flex justify-between items-center">
            <Notification current={2} />
            <div>
              <p className="text-center text-[0.875rem] text-grey-1 leading-[18px]">
                Welcome,
              </p>
              <p className="text-center text-white text-[1.25rem] font-[600]">
                Lorem Ipsum
              </p>
            </div>
            <UserLogo firstCharacterOfName="A" />
          </section>
          <section className="w-full pb-[21px] bg-grey-3 rounded-[40px] mt-[59px]">
            <div className="w-full flex flex-col items-center py-[18px] gap-y-[10px] text-white bg-orange-1 rounded-[40px]">
              <p className="text-[0.75rem] text-center leading-[12px]">
                Total Balance
              </p>
              <p className="text-[2.125rem] font-[700]"> USD120,000.00 </p>
              <p className="text-[0.625rem] text-grey-1">
                Last Updated 2 sec ago
              </p>
            </div>

            <section className="w-full flex justify-center px-[51px] gap-x-[32px] mt-[15px]">
              <QuickLink label="Deposit" link="" />
              <QuickLink label="Send" link="" />
              <QuickLink label="Receive" link="" />
              <QuickLink label="Withdraw" link="" />
            </section>
          </section>
          <section className="bg-grey-1 rounded-[40px_40px_0px_0px] mt-[24px]">
            <div className=" pt-[34px] mx-[23px] border-b-[2px] border-b-grey-4 flex items-center justify-between">
              <div className="flex items-center gap-x-[24px]">
                <button
                  className={`${
                    tab === "deposits"
                      ? "border-b-orange-1 border-b-[2px]  font-[700] text-black-2  "
                      : "font-[400] text-black-3"
                  } text-[0.875rem] mb-[-2px] pr-[5px] leading-[18px] transition-all duration-300 ease-in-out  `}
                  onClick={() => setTab("deposits")}
                >
                  Deposits
                </button>
                <button
                  className={`${
                    tab === "withdrawals"
                      ? "border-b-orange-1 border-b-[2px]  font-[700] text-black-2  "
                      : "font-[400] text-black-3"
                  } text-[0.875rem] mb-[-2px] pr-[5px] leading-[18px] transition-all duration-300 ease-in-out  `}
                  onClick={() => setTab("withdrawals")}
                >
                  Withdrawals
                </button>
                <button
                  className={`${
                    tab === "history"
                      ? "border-b-orange-1 border-b-[2px]  font-[700] text-black-2  "
                      : "font-[400] text-black-3"
                  } text-[0.875rem] mb-[-2px] pr-[5px] leading-[18px] transition-all duration-300 ease-in-out  `}
                  onClick={() => setTab("history")}
                >
                  History
                </button>
              </div>
              <button
                className="text-[0.75rem] text-orange-1 leading-[18px] "
                onClick={() => setOpenAllTransaction(true)}
              >
                View all
              </button>
            </div>
            {depositData?.map((deposit) => {
              return (
                <div key={deposit.id}>
                  <DateHead date={deposit.date} />
                  {deposit.details.map((details, index) => {
                    return (
                      <DetailsCard
                        label={details.label}
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
          </section>

          <AllTransactionModal
            state={openAllTransaction}
            onClose={() => setOpenAllTransaction(false)}
          />
        </div>
      }
    />
  );
};

export default Dashboard;
