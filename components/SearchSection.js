import { HiOutlineSearch } from "react-icons/hi"
import { searchBtn } from "./SearchBtnApi"

const Search = ({ value, setValue, getValue, getSearch }) => {
  return (
    <div className="mx-auto px-[5%] lg:px-[8%] pt-32 pb-40">
      <h1 className="text-4xl lg:text-6xl text-white font-AgeoBold">peaq General FAQ’s</h1>
      <p className="text-white my-2">We got answers! Here you can find everything you need to know about about peaq and its ecosystem.</p>
      <form action="/" className="relative w-full lg:w-2/3 xl: xl:w-4/6 max-w-[700px] py-4 mt-6" onSubmit={getSearch}>
        <input placeholder="Search for a question or a keyword" type="text" value={value} onChange={e => setValue(e.target.value)} className="w-full bg-transparent border-b-2 border-buttonColor text-white outline-none text-sm md:text-lg" style={{ color: "background: #848282" }} />
        <button className="rounded-xl px-6 py-2 text-base bg-buttonColor text-white absolute top-0 right-0"><HiOutlineSearch /></button>
      </form>
      {
        searchBtn.map(btn => <button onClick={getValue} value={btn.title} className="rounded-2xl px-4 py-1 text-sm md:text-base bg-buttonColor text-white font-AgeoBold mr-2 my-2" key={btn.id}>{btn.title}</button>)
      }
    </div>
  )
}

export default Search