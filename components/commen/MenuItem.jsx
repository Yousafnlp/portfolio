import Link from "next/link";

const MenuItem = ({ icon: Icon, label, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center w-full border border-white/10 rounded-md gap-3 group cursor-pointer"
    >
      <div className="p-4 bg-[#222831] group-hover:bg-[#55e6a5] transition-all duration-300 ease-in-out rounded-md">
        <Icon className="text-2xl text-[#55e6a5] group-hover:text-[#0d1b29] transition-all duration-300 ease-in-out" />
      </div>
      <div className="text-white group-hover:text-[#55e6a5] transition-all duration-300 ease-in-out">
        {label}
      </div>
    </Link>
  );
};
export default MenuItem;
