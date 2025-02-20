
import { LinkedIcon, TwitterIcon } from "@/utils";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Icons = () => {
  const iconsList = [
    { Icon: LinkedIcon, href: "", title: "LinkedIn Icon" },
    { Icon: TwitterIcon, href: "", title: "Twitter Icon" },
  ];

  return (
    <div>
      <ul className="flex space-x-4 items-center justify-center">

        <li >
          <Link href="https://www.instagram.com/coachingwithsaurabh?igsh=bjhtM2V6b2hwcXRh" >
            <FaInstagram className="w-8 h-8" />
          </Link>
        </li>
        {/* <li >
          <Link href="">
            <FaLinkedinIn className="w-7 h-7" />
          </Link>
        </li> */}

      </ul>
    </div>
  );
};

export default Icons;
