import Catagories from "./navBarComps/Categories";
import Logo from "./navBarComps/Logo";
import NavSearch from "./navBarComps/NavSearch";
import UserInterface from "./navBarComps/UserInterface";

const Header = () => {
  return (
    <div className="sticky inset-x-0 p-0">
      <div className="h-[4.5rem] md:h-20 md:border-b-1">
        <div className="flex h-full justify-between md:items-center md:px-10 xl:px-20">
          <Logo className="hidden h-12 shrink-0 grow basis-32 md:block" />
          <NavSearch className="h-12 w-full self-end md:w-fit md:self-center" />
          <UserInterface className="hidden h-12 shrink-0 grow basis-32 md:block" />
        </div>
      </div>
      <Catagories />
    </div>
  );
};

export default Header;
