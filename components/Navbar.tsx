import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

type Props = {
  options: Array<{
    title: string;
    path: string;
    icon?: string;
  }>;
};

const Navbar = (props: Props) => {
  const route = useRouter();
  const isActive = (path: string) => route.route === path;
  return (
    <aside className="h-screen bg-base-200 fixed top-0 bottom-0 w-48">
      <ul className="menu p-2 rounded-box">
        {props.options.map((item, index) => {
          return (
            <li key={item.path}>
              <Link href={item.path}>
                <a className={`${isActive(item.path) ? "active" : ""}`}>
                  {item.icon && <Icon icon={item.icon}></Icon>}
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navbar;
