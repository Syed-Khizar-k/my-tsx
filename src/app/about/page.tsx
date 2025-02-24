import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const aboutPage = () => {
  return (
    <main className="bg-white">
      <header className="h-[50vh] bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/banner.png')]  bg-center  bg-cover px-[5.5vw] py-[2.3vw]">
        <Navbar></Navbar>
        <h1 className="text-center uppercase text-[26px] md:text-[42px] py-[100px] text-lime font-[900] ">
          About US
        </h1>
      </header>
      <section className="px-[7vw] py-[12.3vw] flex flex-col-reverse md:flex-row w-full">
        <div className="text-sec md:w-[50%] px-[28px] py-[10px]">
          <h1 className="uppercase md:text-[46px] text-[22px] font-extrabold text-lime md:leading-[46px] py-[10px]">
            We are the worlds largest University
          </h1>
          <p className="text-grey py-[20px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cumque in accusantium molestias maiores fuga vitae eos, ducimus
            officiis repudiandae voluptatem error. Laboriosam, numquam
            blanditiis aspernatur, nobis tempora consequatur id aliquam
            asperiores voluptatum iste animi voluptatem fugiat totam excepturi
            dolor.
          </p>
          <button className="border border-blue-700 md:px-[34px] px-[14px] md:py-[14px] py-[8px] rounded-[5px] hover:bg-lime transition duration-1000 text-blue-700 text-[14px] md:text-[14px] ">
            EXPLORE NOW
          </button>
        </div>
        <div className="image-sec md:w-[50%] ">
          <img
            src="/about.png"
            alt="about"
            className="px-[30px] w-full h-auto"
          />
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default aboutPage;
