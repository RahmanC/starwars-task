"use client";

import React, { FC } from "react";
import { Field, FormikValues, useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export const AppField: FC<AppFieldProps> = ({ name, label, ...rest }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<FormikValues>();

  return (
    <div>
      <div
        className={`relative w-[100%] p-[1rem] border border-secondary rounded-[4px] ${
          touched[name] && errors[name] && "border-red-400"
        }`}
      >
        <label
          htmlFor={name}
          className={`absolute top-[-15%] left-[5%] bg-white px-1 text-xs font-[500] text-[#B0B9C8] capitalize ${
            touched[name] && errors[name] && "text-red-400"
          }`}
        >
          {label}
        </label>
        <Field
          className="w-[100%] bg-none outline-none text-primary"
          id={name}
          name={name}
          onBlur={() => setFieldTouched(name, true)}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          value={values[name]}
          {...rest}
        />
      </div>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};
