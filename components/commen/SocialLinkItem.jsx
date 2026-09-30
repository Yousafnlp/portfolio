import Link from "next/link";

const SocialLinkItem = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-[#55e6a5] flex items-center gap-2 justify-center text-xs md:text-base   text-[#0d1b29] hover:border-[#55e6a5] hover:text-[#55e6a5] border-transparent border-2  p-2 rounded-full md:w-[120px] w-[100px] leading-[1] hover:bg-[#0d1b29] transition-all duration-300"
    >
      {icon}
      {text}
    </Link>
  );
};
export default SocialLinkItem;
