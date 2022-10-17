import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import NavItems from "./NavItems"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="shadow-sm fixed top-0 w-full z-10 bg-black">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center px-[5%] lg:px-[8%] xl:pt-4  justify-between w-full">
            <Link href="/">
              <a><Image src="/logo.png" width={"91"} height={"30"} /></a>
            </Link>
            <NavItems className="hidden lg:block lg:pr-5" />
          </div>
          <div className="mr-4 flex lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-buttonColor inline-flex items-center justify-center p-2 rounded-md text-white  hover:to-buttonColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:to-buttonColor focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <NavItems className="lg:hidden" />
        </Transition>
      </nav>
    </>
  );
}

export default Navbar