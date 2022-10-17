import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer px-[5%] lg:px-[8%] bg-black py-32 ">
      <div className="md:flex">
        <div className="md:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">Follow Us</h5>
        </div>
        <div className="md:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">General</h5>
          <ul>
            <li className="text-white"><Link href="/">Press</Link></li>
            <li className="text-white"><Link href="/">About</Link></li>
            <li className="text-white"><Link href="/">Career</Link></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">Technology</h5>
          <ul>
            <li className="text-white"><Link href="/">Press</Link></li>
            <li className="text-white"><Link href="/">About</Link></li>
            <li className="text-white"><Link href="/">Career</Link></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h5 className="text-xl font-semibold text-white mb-4 mt-8">Community</h5>
          <ul>
            <li className="text-white"><Link href="/">Press</Link></li>
            <li className="text-white"><Link href="/">About</Link></li>
            <li className="text-white"><Link href="/">Career</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer