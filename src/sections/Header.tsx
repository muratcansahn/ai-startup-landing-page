import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none" >
    <div className="container">
 <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
  <div>
    <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">

   <LogoIcon className="w-8 h-8" />
    </div>
  </div>
  <div className="hidden md:block">

  <nav className="flex gap-8 text-sm" >
<a  className=" text-white/70 hover:text-white transition" href="">Features</a>
<a href="" className=" text-white/70 hover:text-white transition"> Developer</a>
<a href=""className=" text-white/70 hover:text-white transition">Pricing</a>
<a href=""className=" text-white/70 hover:text-white transition">About</a>
  </nav>
  </div>
  
  <div className="flex gap-4 items-center">
    <button className="relative rounded-lg py-2 px-3 font-medium text-sm  bg-gradient-to-b  from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
    <div className="absolute inset-0 ">
      <div className="border rounded-lg absolute inset-0 border-white/20 [mask-image]:linear-gradient(to_bottom,black,transparent)" ></div>
      <div className="border rounded-lg absolute inset-0 [mask-image]:linear-gradient(to_top,black,transparent) border-white/40" ></div>
    <div className="absolute  rounded-lg inset-0 shadow-[0px_0px_10px_rgb(140,69,255,0.7)_inset]"> </div>
    </div>
    <span>Join Waimctlist</span>
    </button>
    <MenuIcon className="w-8 h-8 md:hidden" />

  </div>
 </div>
    </div>
  </header>;
};
