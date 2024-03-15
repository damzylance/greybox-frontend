import { useState } from "react";
import { useClickOut } from "../../utils/ClickOut";

interface SelectInputProps {
  pOnclick: React.MouseEventHandler<HTMLDivElement>;
  cOnclick: (list: string) => void;
  cList: string[];
  open: Boolean;
  value: string | null;
  fValue?: string;
  width?: string;
  useWidth?: Boolean;
  mainRef: React.RefObject<HTMLUListElement>;
  subRef: React.RefObject<HTMLImageElement>;
  setFunc: React.Dispatch<React.SetStateAction<Boolean>>;
  setStatusFunc: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SelectInput = ({
  pOnclick,
  cOnclick,
  cList,
  open,
  fValue,
  value,
  width,
  useWidth,
  mainRef,
  subRef,
  setFunc,
  setStatusFunc,
  ...props
}: SelectInputProps) => {
  useClickOut({ onState: open, mainRef, subRef, setFunc });
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div
      className={`relative ${
        useWidth ? `w-[${width}]` : "w-full md:w-[100%]"
      }  `}
    >
      <div
        ref={subRef}
        className="h-[48px] w-full rounded-[8px] p-[0px_19px] flex items-center border-grey-1 border-[1px] gap-x-[5px] shadow-sm"
      >
        <input
          placeholder={fValue}
          onChange={(e) => {
            setStatusFunc(null);
            setSearchText(e.target.value);
          }}
          onClick={() => setFunc(true)}
          type="text"
          value={value ? value : searchText}
          {...props}
          className="flex-grow h-[90%] text-black-3 placeholder:text-black-3 text-[0.875rem] leading-[18px] px-[5px] bg-transparent outline-none"
        />
        <img
          src="/images/arrowDown.png"
          alt=""
          className={` ${
            open && "rotate-180 transition-transform ease-in-out"
          }`}
          onClick={pOnclick}
        />
      </div>
      <ul
        ref={mainRef}
        className={`my-[5px] p-[17px_0px_21px_1px] max-h-[380px] overflow-hidden bg-grey-1 border-b-grey-1 border-r-[#99C0FF]"
        } border-r-[3px]  border-b-[3px]  rounded-[24px] min-w-[160px] right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] absolute z-[1] ${
          !open && "hidden "
        }`}
      >
        {cList
          .filter((flist) =>
            flist.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((list) => (
            <li
              key={list}
              className={`hover:bg-orange-1 text-black-3 hover:text-white text-[0.875rem] rounded-[8px] p-[9px_31px_9px_17px]`}
              onClick={() => {
                list.length !== 0 && cOnclick(list);
              }}
            >
              {list}
            </li>
          ))}

        {cList.filter((flist) =>
          flist.toLowerCase().includes(searchText.toLowerCase())
        ).length === 0 && (
          <li
            className={`hover:bg-[#99C0FF] text-textBlack rounded-[8px] p-[9px_31px_9px_17px]`}
          >
            No option
          </li>
        )}
      </ul>
    </div>
  );
};
