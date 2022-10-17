import { Transition } from "@headlessui/react"
import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"


function Accordion({ items }) {
  let [data, setData] = useState(false)

  function toggleClick(index) {
    if (index === data) {
      return setData(null)
    }
    setData(index)
  }
  return (
    <>
      {
        items.map((currentE, index) => {
          return (
            <div className="accordion-item border-b border-light-gray border-solid pb-2" key={index}>
              <div className="flex items-center pb-2 pt-2">
                {data === index ? <AiOutlineMinus className="text-white mr-4 text-lg" /> : <AiOutlinePlus className="text-white mr-4 text-lg" />}
                <h3 className="text-lg md:text-2xl text-white font-semibold cursor-pointer" onClick={() => toggleClick(index)} >{currentE.question}</h3>
              </div>
              <Transition
                show={data === index ? true : false}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <p className={data === index ? "text-white pb-2 pl-8 max-h-min" : "max-h-0 overflow-hidden"}>{currentE.answer}</p>
              </Transition>
            </div>
          )

        })
      }
    </>
  )
}

export default Accordion