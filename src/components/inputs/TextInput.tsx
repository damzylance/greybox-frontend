import React from "react";
type FormFieldProps = {
  placeholder: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  img?: React.ReactNode;
  isSmall?: boolean;
};
export const TextInput = ({
  placeholder,
  type,
  onChange,
  img,
  isSmall,
  ...props
}: FormFieldProps) => {
  return (
    <div
      className={`h-[48px] ${
        isSmall ? "p-[11px_9.5%]" : "p-[0px_19px]"
      } rounded-[8px]  flex items-center border-grey-1 border-[1px] gap-x-[5px] shadow-sm`}
    >
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        className={`flex-grow w-[24%] h-[90%] text-black-3 placeholder:text-black-3 text-[0.875rem] leading-[18px]  bg-transparent outline-none ${
          isSmall ? "flex items-center justify-center px-0" : "px-[5px]"
        }`}
      />
      {!isSmall && <span className=" w-fit">{img}</span>}
    </div>
  );
};
