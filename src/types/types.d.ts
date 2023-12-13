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

interface TableProps {
  tableHeader: string;
  rowData: ReactNode[];
  columnData: any[];
  loading?: boolean;
}

interface DetailsProps {
  src: string;
  name: string;
  label1: string;
  label2: string;
  label3: string;
  label4?: string;
  value1: string;
  value2: string;
  value3: string;
  value4?: string;
}

interface Params {
  id: string;
}
