import logo from "../assets/websitelogo.png";
import hamburger from "../assets/hamburger.png";
import { navLinks } from "../constants/index";

function Navbar() {
  return (
    <header className="bg-white w-full fixed py-2 px-10 lg:px-52 z-10 border-b-[.5px] border-black">
      <nav className="flex justify-between items-center max-w-[1440px]">
        <a href="/">
          <img src={logo} alt="logo" width={50} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              className="leading-normal text-zinc-850 font-bold text-xl cursor-pointer"
              key={item.label}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} width={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
