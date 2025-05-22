import Image from "next/image";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const Button = ({ label, Icon, onClick }) => {
    return (
      <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-4xl">
        <button
          onClick={onClick}
          className="relative overflow-hidden bg-gradient-to-r cursor-pointer 
          flex group justify-center items-center gap-3 text-[22px] font-semibold text-white 
          w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-4xl 
          hover:from-black hover:to-gray-500 hover:flex-row-reverse 
          transition-all duration-500 ease-in-out"
        >
          <Icon
            className="transition-all duration-500 ease-in-out 
            bg-white group-hover:bg-transparent group-hover:border group-hover:text-white 
            border-white text-[#274afd] p-1.5 rounded-full"
            size={33}
          />
          <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
            {label}
          </span>
          <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </button>
      </div>
    );
  };
  return (
    <section className="w-full bg-[#F7F8FC] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div
          className="rounded-3xl p-8 text-white flex flex-col justify-between"
          style={{
            background: "linear-gradient(180deg, #132663 0%, #000F3F 100%)",
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Address</h3>
            <p className="mb-6">
              3400 Cottage Way, Suite G2 #26176
              <br />
              Sacramento, CA 95825, USA
            </p>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="mb-1">Phone: +(000)000000000</p>
            <p>Email: contact@webdevxio.com</p>
          </div>

          <div className="relative mt-10">
            <Image
              src="/ContactBg3.png"
              alt="Quote Background"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-20"
            />
            <div className="relative border border-white rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl text-[#3B82F6] mb-4">“</div>
              <p>
                Let’s build something amazing together! 🚀 Whether you need a
                stunning SaaS website or a complete redesign, we’re here to
                help. Drop us a message.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            —Contact Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get Your <span className="text-blue-600">Free Quote</span> Today!
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Your Name *</label>
              <input
                type="text"
                placeholder="Ex.john doe"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number *</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Service *</label>
              <select className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]">
                <option>Select Service</option>
                <option>Website Design</option>
                <option>Website Development</option>
                <option>Redesign</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Enter here.."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-start">
              <Button label="Send Message" Icon={CiMail} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
