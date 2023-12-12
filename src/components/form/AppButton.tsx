import React from "react";

interface Props {
  label: string;
  onClick?: () => void;
  style?: any;
  type?: any;
}
const AppButton = ({ label, type, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "bg-secondary rounded-[6px] p-3 w-[100%] text-white font-[500] text-[1rem]"
      }
    >
      {label}
    </button>
  );
};

export default AppButton;
