import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

type Props = PropsWithChildren<{
  className?: string;
}>;

const menus = [
  {
    title: "物料管理",
    path: "/material",
    icon: "ep:goods",
  },
  {
    title: "订单管理",
    path: "/order",
    icon: "icon-park-outline:transaction-order",
  },
  {
    title: "客户管理",
    path: "/customer",
    icon: "bi:people-fill",
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
