import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const blogsPage = () => {
  return (
    <main className="bg-white">
      <section className="h-[50vh] bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/banner.png')]  bg-center  bg-cover px-[5.5vw] py-[2.3vw]">
        <Navbar></Navbar>
        <h1 className="text-center uppercase text-[26px] md:text-[42px] py-[100px] text-lime font-[900] ">
          our post
        </h1>
      </section>

      {/* blog section with comment box */}
      <section className="px-[9.5vw] py-[7.3vw] w-full flex">
        <div className="left-part md:w-[66%] w-full">
          <h1 className="capitalize text-blacky md:text-[28px] font-[900]">
            Our Certificate & Online Program
          </h1>
          <h3 className="text-lime text-[14px] font-[900] py-[10px]">
            Aug 1 ,2021
          </h3>
          <img src="/post.png" alt="blog post" className="w-full" />
          <div className="paragraphs">
            <p className="text-grey py-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor consequatur, nobis quae obcaecati delectus at
              aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum
              dolore velit odit cumque, quos doloribus sint id aperiam eius
              aliquam quo modi sequi rem quia exercitationem laborum, ratione
              expedita! Deleniti velit officia incidunt illum.
            </p>
            <p className="text-grey py-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <p className="text-grey py-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <p className="text-grey py-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
          </div>
          {/*comment box */}
          <div className="w-full border border-grey px-[20px] py-[10px]">
            <h1 className="text-[22px] text-black font-[900]">
              Leave a Comment
            </h1>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-greyl w-full p-[8px] my-[10px] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-greyl w-full p-[8px] my-[10px] focus:outline-none"
            />
            <textarea
              cols={10}
              rows={5}
              placeholder="Your Comment"
              className="bg-greyl w-full p-[8px] my-[10px] focus:outline-none"></textarea>
            <button className="border border-blue-700 md:px-[34px] px-[14px] md:py-[14px] py-[8px] rounded-[5px] hover:bg-lime transition duration-1000 text-blue-700 text-[14px] md:text-[14px] my-[10px] ">
              POST COMMENT
            </button>
          </div>
        </div>

        <div className="hidden md:block right-part md:w-[34%] md:pl-[30px]">
          <h1 className="text-white bg-lime w-full text-center text-[18px] font-[900] py-[7px]">
            Post Categories
          </h1>
          <ul className="py-[15px] px-[5px]">
            <li className=" text-[16px] text-gray-700 py-[8px] hover:text-lime">
              <a href="#" className="flex justify-between">
                <span>Business Analytics</span> <span>12</span>
              </a>
            </li>
            <li className=" text-[16px] text-gray-700 py-[8px] hover:text-lime">
              <a href="#" className="flex justify-between">
                <span>Machine Learning</span> <span>29</span>
              </a>
            </li>
            <li className=" text-[16px] text-gray-700 py-[8px] hover:text-lime">
              <a href="#" className="flex justify-between">
                <span>Computer Science</span> <span>15</span>
              </a>
            </li>
            <li className=" text-[16px] text-gray-700 py-[8px] hover:text-lime">
              <a href="#" className="flex justify-between">
                <span>Data Analytics</span> <span>22</span>
              </a>
            </li>
            <li className=" text-[16px] text-gray-700 py-[8px] hover:text-lime">
              <a href="#" className="flex justify-between">
                <span>Full Stack</span> <span>20</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
};
export default blogsPage;
