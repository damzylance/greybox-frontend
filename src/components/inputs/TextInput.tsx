interface FormFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  img?: React.ReactNode;
  isSmall?: boolean;
}
export const TextInput = ({ img, isSmall, ...props }: FormFieldProps) => {
  return (
    <div
      className={`h-[48px] ${
        isSmall ? "p-[11px_9.5%]" : "p-[0px_19px]"
      } rounded-[8px]  flex items-center border-[#99999961] border-[1px] gap-x-[5px] shadow-shadow-1`}
    >
      <input
        {...props}
        className={`flex-grow w-[24%] h-[90%] text-black-3 placeholder:text-black-3 text-[0.875rem] leading-[18px]  bg-transparent outline-none ${
          isSmall ? "flex items-center justify-center px-0" : "px-[5px]"
        }`}
      />
      {!isSmall && <span className=" w-fit">{img}</span>}
    </div>
  );
};

export const InputLabel = ({ text }: { text: string }) => (
  <label htmlFor={text} className="text-[0.75rem] text-black-2 mb-[8px]">
    {text}
  </label>
);

export const InputInfoLabel = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="w-full rounded-[0px_0px_8px_8px] mt-[-5px] bg-orange-2 flex items-center justify-between p-[8px_22px] text-[0.75rem] text-black-2">
    <span>{title}</span> <span>{value}</span>
  </div>
);
