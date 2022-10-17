import Link from "next/link";
import { HiChevronDown } from "react-icons/hi"

const NavItems = ({ className }) => {
  return (
    <div className={className}>
      <ul className="ml-4 lg:flex items-center pb-6 lg:pb-0">
        <li className="relative">
          <button className="cursor-pointer peer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100">Build <HiChevronDown className="w-[20px] height=[20px] inline" />
          </button>
          <div class="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg rounded-lg overflow-hidden absolute top-14  z-10">
            <a class="px-5 py-3 hover:bg-gray-200 hover:text-buttonColor transition-colors" href="#">About Us</a>
            <a class="px-5 py-3 hover:bg-gray-200 hover:text-buttonColor transition-colors" href="#">Contact Us</a>
            <a class="px-5 py-3 hover:bg-gray-200 hover:text-buttonColor transition-colors" href="#">Privacy Policy</a>
          </div>
        </li>
        <li>
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="cursor-pointer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100">Use Cases</a>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="cursor-pointer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100">Token</a>
          </Link>
        </li>

        <li>
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}

          >
            <a className="cursor-pointer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100">Echo System</a>
          </Link>
        </li>

        <li>
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="cursor-pointer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100"> About</a>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}
          >
            <a className="cursor-pointer text-white opacity-70 block p-5 rounded-md text-base font-medium hover:opacity-100">Community</a>
          </Link>
        </li>
        <li className="mt-4 lg:mt-0">
          <Link
            href="/"
            smooth={true}
            offset={50}
            duration={500}>
            <a className="cursor-pointer  text-white px-6 py-2 ml-3 lg:ml-9 rounded-xl border-buttonColor border-2 text-base font-medium hover:bg-buttonColor">App</a>
          </Link>
        </li>
      </ul>
    </div >
  )
}

export default NavItems