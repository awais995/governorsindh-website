import Image from "next/image"

function Navbar() {
  return (
    <header>
      <div className="fixed top-0 w-full">

        <nav className=" flex justify-center gap-20  items-center font-roboto bg-custom-blue text-white h-20 ">
            <div className=" -mb-20 ">
              <Image src="/Governor images/Governor-logo.png" alt="logo" height={100} width={100}/>
            </div>
            <div className="text-2xl font-bold">
            <p>Tution Free Education Program on Latest Technologies</p>
            </div>
            <ul className="flex gap-5">
              <li>Home</li>
              <li>Apply</li>
              <li>Jobs</li>
              <li>Result</li>
              <li>Courses</li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
