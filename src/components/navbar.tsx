import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="navigation w-full flex justify-between  items-center ">
      <a
        href="/"
        className="text-[22px] sm:text-[28px] font-extrabold flex text-center items-center border-none  ">
        <span> Xplore</span>
        <img src="/LOGO.svg" alt="" className="h-[48px] w-[36px] p-[2px]" />
        <span>kill</span>
      </a>
      <div>
        <ul className="md:flex hidden gap-[2vw] font-medium text-[18px] ">
          <li>
            <Link
              href="/"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              COURSE
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              BLOG
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="relative text-white after:block after:h-[2px] after:bg-[#24f8c7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="md:hidden text-[44px] items-center">
          <a href="#">&#8801;</a>
        </div>
      </div>
    </nav>
  );
};
