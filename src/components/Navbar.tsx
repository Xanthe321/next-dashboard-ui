import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex">
        <Image alt="" src="/search.png" width={14} height={14}/>
        <input type="text" placeholder="Search" />
      </div>
      <div className=""></div>
    </div>
  )
}

export default Navbar