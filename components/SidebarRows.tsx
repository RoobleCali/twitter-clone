function SidebarRows({ Icon, title }) {
  return (
    <div className="">
      <button className="flex items-center space-x-2 hover:text-white">
        <Icon className="h-5 w-5" />
        <p>{title}</p>
      </button>
    </div>
  );
}

export default SidebarRows;
