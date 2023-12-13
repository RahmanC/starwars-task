import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "@/redux/slices/util";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch();

  const { sidenav } = useSelector((state: any) => state.util);

  const toggleNav = () => {
    dispatch(ToggleMenu());
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block w-1/5 ">
        <Sidebar />
      </div>
      <div className="w-full md:w-4/5 flex flex-col max-h-screen">
        <Navbar sidenav={sidenav} setSideNav={toggleNav} />
        {sidenav && (
          <div className="block md:hidden w-full h-screen fixed top-[10%] ">
            <Sidebar />
          </div>
        )}
        <div className="w-full flex flex-1 p-5 md:p-10 overflow-y-scroll mt-9">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
