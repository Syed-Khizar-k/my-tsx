import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import Link from "next/link";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
          <button className="border border-white px-[34px] py-[12px] rounded-[5px] hover:bg-lime transition duration-1000">
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
        {/* cards */}
        <div className="cards flex justify-between px-[9vw] py-[2.3vw] ">
          <div className="card w-[330px] px-[12px] py-[20px] bg-pinkish rounded-xl hover:shadow-custom  transition-shadow duration:1000">
            <h1 className="text-blacky text-[22px] font-[900] my-[10px] text-center">
              Undergaraduate Programs
            </h1>
            <p className="text-grey text-[16px] p-[10px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>

          <div className="card w-[330px] px-[12px] py-[20px] bg-pinkish rounded-xl hover:shadow-custom  transition-shadow duration:3000">
            <h1 className="text-blacky text-[22px] font-[900] my-[10px] text-center">
              Undergaraduate Programs
            </h1>
            <p className="text-grey text-[16px] p-[10px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>

          <div className="card w-[330px] px-[12px] py-[20px] bg-pinkish rounded-xl hover:shadow-custom  transition-shadow duration:3000">
            <h1 className="text-blacky text-[22px] font-[900] my-[10px] text-center">
              Undergaraduate Programs
            </h1>
            <p className="text-grey text-[16px] p-[10px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>
      {/* //places section : */}

      <section className="places px-[5.5vw] py-[2.3vw]">
        <div className="empty-boxes px-[5.5vw] py-[2.3vw] flex justify-between w-[100%] ">
          <div className="w-[50%]   border-lime p-[5vw]"></div>
          <div className=" w-[50%] border-l-2 border-lime p-[5vw]"></div>
        </div>
        <h1 className="heading text-lime text-[46px] font-[900] uppercase  text-center leading-[3rem]">
          take our virtual tour
        </h1>
        <p className="text-center text-grey p-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        {/* images cards : */}
        <div className="images-cards px-[5vw] py-[2.3vw] flex justify-between pt-[50px]">
          <div className="card w-[340px] h-[230px] relative bg-cover bg-[url('/Campus1.png')] rounded-xl"></div>

          <div className="card w-[340px] h-[230px] relative bg-cover bg-[url('/Campus2.png')] rounded-xl"></div>

          <div className="card w-[340px] h-[230px] relative bg-cover bg-[url('/Campus3.png')] rounded-xl"></div>
        </div>
      </section>
      {/* Facilities : */}
      <section className="facilities px-[5.5vw] py-[2.3vw]">
        <div className="empty-boxes px-[5.5vw] py-[2.3vw] flex justify-between w-[100%] ">
          <div className="w-[50%]   border-lime p-[5vw]"></div>
          <div className=" w-[50%] border-l-2 border-lime p-[5vw]"></div>
        </div>
        <h1 className="heading text-lime text-[46px] font-[900] uppercase  text-center leading-[3rem]">
          Our Facilities
        </h1>
        <p className="text-center text-grey p-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        {/* Facilities cards : */}
        <div className="images-cards px-[5vw] py-[2.3vw] flex justify-between pt-[50px]">
          <div className="card w-[340px]  relative">
            <div
              className="bg-cover bg-[url('/libary.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Best Library
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>

          <div className="card w-[340px]  relative">
            <div
              className="bg-cover bg-[url('/playground.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Athletics
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>

          <div className="card w-[340px]  relative">
            <div
              className="bg-cover bg-[url('/food.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Best Library
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="reviews px-[5.5vw] py-[2.5vw]">
        <div className="empty-boxes px-[5.5vw] py-[2.3vw] flex justify-between w-[100%] ">
          <div className="w-[50%]   border-lime p-[5vw]"></div>
          <div className=" w-[50%] border-l-2 border-lime p-[5vw]"></div>
        </div>
        <h1 className="heading text-lime text-[46px] font-[900] uppercase  text-center leading-[3rem]">
          What our Student Says
        </h1>
        <p className="text-center text-grey p-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="review-cards px-[5.5vw] py-[2.3vw] flex justify-between">
          <div className="review-card p-[25px] bg-pinkish w-[470px] flex rounded-xl">
            <div className="photo w-[100%]">
              <img src="/user.png" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="text">
              <p className="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime
              </p>
              <h1 className="text-blacky text-[20px] font-extrabold py-[15px]">
                Student Name
              </h1>
              <div className="flex gap-1 mt-[-10px]">
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
              </div>
            </div>
          </div>

          <div className="review-card p-[25px] bg-pinkish w-[470px] flex rounded-xl">
            <div className="photo w-[100%]">
              <img src="/user.png" alt="" className="h-[60px] w-[60px]" />
            </div>
            <div className="text">
              <p className="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime
              </p>
              <h1 className="text-blacky text-[20px] font-extrabold py-[15px]">
                Student Name
              </h1>
              <div className="flex gap-1 mt-[-10px]">
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStar className="text-lime text-[20px]"></FaStar>
                <FaStarHalfAlt className="text-lime text-[20px]"></FaStarHalfAlt>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Contact Us */}
      <section className="contact-us px-[10.5vw] py-[6.5vw] ">
        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('/back1.png')] h-[500px] bg-center  bg-cover px-[5.5vw] py-[2.5vw] rounded-xl text-center">
          <h1 className="uppercase text-white text-[52px] font-extrabold mt-[170px]">
            Get ready for a bright future
          </h1>
          <button className="border border-white px-[34px] py-[12px] rounded-[5px] hover:bg-lime transition duration-1000">
            CONTACT US
          </button>
        </div>
      </section>
      {/*footer */}
      <Footer></Footer>
    </main>
  );
}
