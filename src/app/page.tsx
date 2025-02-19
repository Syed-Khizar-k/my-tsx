// import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="header h-[100vh] bg-[linear-gradient(rgba(81,126,134,0.77),rgba(148,159,223,0.1)),url('/banner1.png')]  bg-center  bg-cover px-[5.5vw] py-[2.3vw] relative">
        {/* navbar of the page*/}
        <Navbar />
        <div className="header-text text-center relative top-[8vw]">
          <h1 className="text-[6.5vw] font-extrabold text-lime leading-[0.9]">
            GET READY
          </h1>
          <h2 className="text-[3.2vw] font-extrabold ">TO DISCOVER CAMPUS</h2>
          <p className="text-[18px] text-[#ffff] px-[10vw] py-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ullam
            placeat eius, magni aliquam officia? Nesciunt accusamus dolorem eius
            magni!
          </p>
          <button className="border border-gray-800 px-[34px] py-[12px] rounded-[5px] hover:bg-lime transition duration-1000">
            Visit Us To Know More
          </button>
        </div>
      </section>
      {/* //courses section : */}
      <section className="courses pt-[4vw]">
        <div className="empty-boxes px-[5.5vw] py-[2.3vw] flex justify-between w-[100%] ">
          <div className="w-[50%]   border-lime p-[5vw]"></div>
          <div className=" w-[50%] border-l-2 border-lime p-[5vw]"></div>
        </div>
        <h1 className="heading text-lime text-[46px] font-[900] uppercase  text-center leading-[3rem]">
          explore our 60+ <br /> major programs
        </h1>
        <p className="text-center text-grey p-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="cards">
          <div className="card">
            <h1>Undergaraduate Program</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
