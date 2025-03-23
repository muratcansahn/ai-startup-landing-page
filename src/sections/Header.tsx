import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
import { Button } from "@/components/Button";
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
  <Button>Join Waitlist</Button>
    <MenuIcon className="w-8 h-8 md:hidden" />

  </div>
 </div>
    </div>
  </header>;
};
