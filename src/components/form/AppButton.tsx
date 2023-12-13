import React from "react";

const AppButton = ({ label, type, onClick, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "bg-secondary rounded-[6px] p-3 w-[100%] text-white font-[500] text-[1rem]"
      }
    >
      {loading ? "please wait..." : label}
    </button>
  );
};

export default AppButton;
