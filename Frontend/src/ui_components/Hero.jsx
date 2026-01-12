import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BASE_URL } from "@/api";

const Hero = ({ userInfo }) => {
  return (
    <div className="padding-x py-9 max-container flex flex-col items-center justify-center gap-4 bg-[#F6F6F7] dark:bg-[#242535] rounded-md">
      <div className="flex gap-4">
        <div className="w-17.5 h-17.5 rounded-full overflow-hidden">
          <img
            src={`${BASE_URL}${userInfo?.profile_picture}`}
            className="w-17.5 h-17.5 rounded-full object-cover"
          />
        </div>

        <span>
          <p className="text-[18px] text-[#181A2A] dark:text-white">
            {userInfo?.first_name} {userInfo?.last_name}
          </p>
          <p className="text-[14px] text-[#696A75] font-thin dark:text-[#BABABF]">
            {userInfo?.job_title || "Collaborator & Editor"}
          </p>
        </span>
      </div>

      <p className="text-[#3B3C4A] text-[16px] max-md:leading-8 lg:leading-normal lg:mx-50 text-center dark:text-[#BABABF]">
        {userInfo?.bio}
      </p>

      <div className="flex gap-4 justify-center items-center text-white text-xl">
        <div className="w-10 h-10 rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaInstagram />
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaFacebookF />
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#696A75] flex justify-center items-center">
          <BsTwitterX />
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Hero;
