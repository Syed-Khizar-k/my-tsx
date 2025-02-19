import {
  FaStar,
  FaStarHalfAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t-2 w-[100%] text-center flex justify-center">
      <div className="footer-text w-[60%]">
        <h1 className="text-[20px] text-blacky font-bold py-[20px]">
          About Us
        </h1>
        <p className="text-grey text-[16px] py-[10px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
          consectetur. Aliquid ab deserunt exercitationem, illum molestiae
          dolorem.
        </p>
        <div className="flex gap-7 justify-center p-[20px]">
          <a href="#">
            <FaFacebook className="text-blue-600 hover:text-lime text-[18px]"></FaFacebook>
          </a>
          <a href="#">
            {" "}
            <FaInstagram className="text-blue-600 hover:text-lime text-[18px]"></FaInstagram>
          </a>
          <a href="#">
            <FaTwitter className="text-blue-600 hover:text-lime text-[18px]"></FaTwitter>
          </a>
          <a href="#">
            <FaLinkedin className="text-blue-600 hover:text-lime text-[18px]"></FaLinkedin>
          </a>
        </div>
        <p className="flex justify-center items-center text-grey gap-1 p-[10px]">
          Made With <FaHeart className="text-lime"></FaHeart>by
          <a href="#" className="text-blue-700 font-extrabold">
            Syed Khizar
          </a>
        </p>
        <p className="text-grey pt-[5px] pb-[25px]">
          Copyright © 2021
          <a href="#" className="text-blue-600">
            Xplore Skill
          </a>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
