import { useState } from "react"
import Accordion from './Accordion'
import { accordionList } from './AccordionListApi'
import HaveQuestions from './HaveQuestions'
import Search from './SearchSection'

const Main = () => {
  const [value, setValue] = useState("")
  const [accordions, setAccordions] = useState(accordionList)
  function getValue(e) {
    setValue(e.target.value)
  }
  function getSearch(e) {
    e.preventDefault()
    if (value === "") {
      return setAccordions(accordionList)
    }
    setAccordions(() => accordionList.filter(item => value == item.title))
  }
  return (
    <main className="bg-black mt-20">
      <Search value={value} setValue={setValue} getValue={getValue} getSearch={getSearch} />
      <div className="accordion-lists px-[5%] lg:px-[8%] pb-20">
        {accordions.map(list => {
          return (
            <div className={list.title + ` mt-12`} key={list.id}>
              <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-5 font-AgeoSemiBold">{list.title}</h2>
              <Accordion items={list.listItem} />
            </div>
          )
        })}
        <div className="note">
          <p className="text-sm text-white pt-20 pb-8">Note: peaq is is a work in progress. The following FAQs will continue to be updated as the Polkadot platform evolves. The exact structures and technologies to be included at genesis are not finalized and are liable to change with continued research.</p>
        </div>
      </div>
      <HaveQuestions />
    </main>
  )
}

export default Main