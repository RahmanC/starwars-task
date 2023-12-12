interface AppFieldProps {
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
}

interface AppFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
  className?: string;
}

interface SideMenuProps {
  icon: string;
  label: string;
}

interface CardProps {
  label: string;
  value: string;
  icon: string;
  data: string;
}
