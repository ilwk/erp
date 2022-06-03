import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

type Props = PropsWithChildren<{
  className?: string;
}>;

const menus = [
  {
    title: "库存管理",
    path: "/inventory",
  },
];

const AppShell = (props: Props) => {
  return (
    <>
      <Navbar options={menus}></Navbar>
      <main className={["ml-48 min-h-screen p-4", props.className].join(" ")}>
        {props.children}
      </main>
    </>
  );
};

export default AppShell;
