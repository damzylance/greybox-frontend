export const FormButton = ({
  label,
  onClick,
  extraClass,
  ...props
}: {
  label: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass?: string;
}) => (
  <button
    onClick={onClick}
    {...props}
    className={`w-full h-[52px] bg-grey-2 rounded-[48px] flex items-center justify-center text-white text-[0.875rem] font-[700] ${extraClass}`}
  >
    {label}
  </button>
);
