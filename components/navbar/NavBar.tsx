import Catagories from "./navBarComps/Categories";
import Logo from "./navBarComps/Logo";
import NavSearch from "./navBarComps/NavSearch";
import UserInterface from "./navBarComps/UserInterface";

const NavBar = () => {
  return (
    <header className="fixed top-0 inset-x-0 p-0 z-50 ">
      <div className="h-[4.5rem] md:h-20 md:border-b-1">
        <div className="flex h-full justify-between md:items-center md:px-10 xl:px-20 bg-white">
          <Logo className="hidden h-12 shrink-0 grow basis-32 md:block" />
          <NavSearch className="h-12 w-full self-end md:w-fit md:self-center" />
          <UserInterface className="hidden h-12 shrink-0 grow basis-32 md:block" />
        </div>
      </div>
      <div className="px-6 md:px-10 xl:px-20 relative">
        <Catagories />
      </div>
    </header>
  );
};

export default NavBar;
