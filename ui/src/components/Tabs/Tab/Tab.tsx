import { Typography } from "../../Typography";
import { twMerge } from "tailwind-merge";

export const Tab = ({
  label,
  children,
  isActive,
  onClick,
  value
}: {
  label: any;
  children: any;
  isActive?: boolean;
  value: any;
  onClick?: any;
}) => {
  return (
    <li
      className={twMerge(
        "p-4 cursor-pointer hover:bg-grey-100",
        isActive && "border-b-2 border-b-grey-400"
      )}
      onClick={onClick}
    >
      <Typography as="span">{label}</Typography>
    </li>
  );
};
