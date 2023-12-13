import { Provider as AppProvider } from "react-redux";
import { store } from "@/redux/store";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider store={store}>{children}</AppProvider>;
};
