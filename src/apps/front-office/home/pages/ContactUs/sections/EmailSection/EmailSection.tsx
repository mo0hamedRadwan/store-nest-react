import { trans } from "@mongez/localization";
import { Send } from 'lucide-react';


export default function EmailSection() {
  return (
    <section className="relative rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between bg-pannerImg  bg-cover bg-[#E9F9F3] " >
    {/* Left Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-4xl lg:text-5xl font-bold text-mainColor mb-6 lg:mb-20">
        {trans("Stay home & get your daily")}<br/>
        {trans("needs from our shop")}
      </h2>
      <p className="text-lg text-gray-500 font-normal mb-12 lg:mb-[45px]">
      {trans("Start Your Daily Shopping with Nest Mart")}
      <span className="text-[#FDC040]"> {trans("Nest Mart")}</span>
      </p>

      {/* Subscription Form */}
      <form className="flex justify-center lg:justify-start items-center gap-4">
        <div className="relative flex items-center w-64 lg:w-96">
          <Send size={16} className="absolute left-4 text-gray-400" />
          <input
            type="email"
            className="rounded-full pl-12 pr-4 py-4 w-full focus:outline-none shadow-md text-gray-700"
            placeholder={trans("Your email address")}
          />
        </div>
        <button
          className="bg-priceNowColor text-white rounded-full px-8 py-4 font-semibold shadow-md hover:bg-green-600 transition duration-300 flex items-center"
          type="submit"
        >
          {trans("Subscribe")}
        </button>
      </form>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/2 flex justify-end items-end ">
      <img
        src="/images/contact-us/banner.png" 
        alt="newsletter"
        className="w-full h-auto object-none lg:max-w-md mb-[-10%]"
      />
    </div>
  </section>  
  )
}
