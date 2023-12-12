"use client";

import React, { FC } from "react";
import { Form, Formik } from "formik";

export const AppForm: FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  className,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={className ?? "flex flex-col gap-[2rem]"}>
          {children}
        </Form>
      )}
    </Formik>
  );
};
