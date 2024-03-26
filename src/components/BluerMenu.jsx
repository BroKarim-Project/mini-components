import './style.css';

export default function BluerMenu() {
  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
        <a className="text-xl font-bold text-white leading-none" href="#">
          By Karim
        </a>
        <ul className=" absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2  flex mx-auto items-center lg:w-auto space-x-4  cursor-pointer ">
          <li className="  z-10 text-sm text-white hover:text-white/80 transition duration-500">Home</li>

          <li className=" text-sm text-white hover:text-white/80 transition duration-500">Services</li>

          <li className=" text-sm text-white hover:text-white/80 transition duration-500">Pricing</li>
        </ul>

        <a className=" lg:inline-block py-2 px-3 bg-blue-500 hover:bg-blue-600 text-sm text-white flex items-center rounded-md transition duration-200" href="#">
          Sign up
        </a>
      </nav>
    </>
  );
}
