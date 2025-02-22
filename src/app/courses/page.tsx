import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";

const coursePage = () => {
  return (
    <main className="bg-white">
      <header className="h-[50vh] bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/banner.png')]  bg-center  bg-cover px-[5.5vw] py-[2.3vw]">
        <Navbar></Navbar>
        <h1 className="text-center uppercase text-[26px] md:text-[42px] py-[100px] text-lime font-[900] ">
          our courses
        </h1>
      </header>

      {/* courses section :  */}
      <section className="courses py-[8vw]">
        <h1 className="heading text-lime md:text-[46px] text-[26px] font-[900] uppercase  text-center md:leading-[3rem]">
          courses we offer
        </h1>
        <p className="text-center text-grey py-[30px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <Card></Card>
      </section>

      {/* best courses:  */}
      <section className="best-courses px-[5.5vw] md:py-[2.3vw] py-[100px]">
        <h1 className="heading text-lime md:text-[46px] text-[26px] font-[900] uppercase  text-center leading-[3rem]">
          best courses
        </h1>
        <p className="text-center text-grey p-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        {/* courses cards section : */}
        <div className="images-cards px-[5vw] py-[2.3vw] flex justify-center flex-wrap gap-[20px] pt-[50px] md:flex-nowrap">
          <div className="card md:w-[340px] w-full  relative">
            <div
              className="bg-cover bg-[url('/course1.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Web Development
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>

          <div className="card md:w-[340px] w-full  relative">
            <div
              className="bg-cover bg-[url('/course2.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Artificial Intelligence
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>

          <div className="card md:w-[340px] w-full   relative">
            <div
              className="bg-cover bg-[url('/course3.png')] w-[100%]
         h-[230px] rounded-xl hover:shadow-custom"></div>
            <div>
              <h1 className="text-blacky text-[20px] font-extrabold mt-[16px] mb-[15px]">
                Data Science
              </h1>
              <p className="text-grey text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio omnis asperiores atque aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
};

export default coursePage;
