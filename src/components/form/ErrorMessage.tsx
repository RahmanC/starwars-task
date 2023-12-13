import React from "react";

const ErrorMessage = ({ error, visible }: any) => {
  if (!visible || !error) return null;

  return (
    <div className="text-red-400 text-xs font-[500] mt-1 italic">{error}</div>
  );
};

export default ErrorMessage;
