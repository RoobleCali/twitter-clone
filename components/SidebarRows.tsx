import { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
function SidebarRows({ title, Icon }) {
  return (
    <div
      className="flex max-w-fit items-center px-4 py-3 space-x-2 rounded-full
     hover:bg-gray-100 transition-all duration-300 cursor-pointer group
    "
    >
      <Icon className="w-6 h-6" />
      <p
        className="group-hover:text-twitter hidden md:inline-flex
      text-base font-light lg:text-xl"
      >
        {title}
      </p>
    </div>
  );
}

export default SidebarRows;
