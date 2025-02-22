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
      <section className="px-[9.5vw] py-[7.3vw] w-full">
        <div className="left-part w-[68%]">
          <h1 className="capitalize text-blacky">
            Our Certificate & Online Program
          </h1>
          <h2 className="text-lime">Aug 1 ,2021</h2>
          <img src="/post.png" alt="blog post" />
          <div className="paragraphs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor consequatur, nobis quae obcaecati delectus at
              aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum
              dolore velit odit cumque, quos doloribus sint id aperiam eius
              aliquam quo modi sequi rem quia exercitationem laborum, ratione
              expedita! Deleniti velit officia incidunt illum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
          </div>
        </div>

        <div className="right-part w-[30%]"></div>
      </section>

      <Footer></Footer>
    </main>
  );
};
export default blogsPage;
