import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="navigation flex justify-between  items-center ">
      <a
        href="page.tsx"
        className="text-[28px] font-extrabold flex text-center items-center">
        <span> Xplore</span>
        <img src="/LOGO.svg" alt="" className="h-[58px] w-[46px] p-[2px]" />
        <span>kill</span>
      </a>
      <div>
        <ul className="flex gap-[2vw] font-medium text-[18px]">
          <li>
            <a
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              COURSE
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
