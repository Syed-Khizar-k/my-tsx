import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const contactUs = () => {
  return (
    <main className="bg-white">
      <section className="h-[50vh] bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('/banner.png')]  bg-center  bg-cover px-[5.5vw] py-[2.3vw]">
        <Navbar></Navbar>
        <h1 className="text-center uppercase text-[26px] md:text-[42px] py-[100px] text-lime font-[900] ">
          Contact us
        </h1>
      </section>

      <section className="px-[10.5vw] py-[8.3vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14162647.085439857!2d58.35379278751564!3d29.931185011052904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268892413fe3f%3A0x36e484b8d8119a56!2sAsdev%20Tech!5e0!3m2!1sen!2s!4v1740326165826!5m2!1sen!2s"
          width="600"
          height="450"
          className="w-full"
          allowFullScreen
          loading="lazy"></iframe>
      </section>
      {/* Left Deatails  */}
      <section className="px-[10.5vw] py-[2.3vw] flex justify-center">
        <div className="l-details w-[50%]">
          <div className="flex items-center gap-[30px] py-[20px]">
            <div>
              <FaHome className="text-[32px] text-lime"></FaHome>
            </div>
            <div>
              <h1 className="text-black text-[22px]">NH9 Road, ABC Building</h1>
              <p className="text-grey">Ghaziabad, Uttar Pradesh, IN</p>
            </div>
          </div>

          <div className="flex items-center gap-[30px] py-[20px]">
            <div>
              <FaPhone className="text-[32px] text-lime"></FaPhone>
            </div>
            <div>
              <h1 className="text-black text-[22px]">+91 7445546525</h1>
              <p className="text-grey">Monday To Saturday, 9AM To 6PM</p>
            </div>
          </div>

          <div className="flex items-center gap-[30px] py-[20px]">
            <div>
              <FaEnvelope className="text-[32px] text-lime"></FaEnvelope>
            </div>
            <div>
              <h1 className="text-black text-[22px]">xyz@email.com</h1>
              <p className="text-grey">Email Us Yor Query</p>
            </div>
          </div>
        </div>
        {/* right details */}
        <div className="r-details w-[50%]">
          <form>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-grey p-[10px] my-[10px]"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-grey p-[10px] my-[10px]"
            />
            <input
              type="text"
              placeholder="Enter Subject"
              className="w-full border border-grey p-[10px] my-[10px]"
            />
            <textarea
              cols={10}
              rows={10}
              placeholder="Message"
              className="w-full border border-grey p-[10px] my-[10px]"></textarea>

            <button className="border border-blue-700 md:px-[34px] px-[14px] md:py-[14px] py-[8px] rounded-[5px] hover:bg-lime transition duration-1000 text-blue-700 text-[14px] md:text-[14px] my-[10px] ">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default contactUs;
