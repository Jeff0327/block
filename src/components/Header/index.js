"use client";
import {
  Bars3Icon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
function Header() {
  return (
    <>
      <div className="w-full bg-black p-4"></div>
      <div className="flex justify-between items-center w-full p-5">
        <div className="flex px-4 items-center justify-center">
          <Bars3Icon className="w-5 h-5 text-default-300 mx-0" />
          <HeartIcon className="w-5 h-5 text-default-300 ml-2" />
        </div>
        <div className="flex justify-center itmes-center">
          <HomeIcon className="w-5 h-5 text-default-300" />
        </div>
        <div className="flex px-4 items-center">
          <UserIcon className="w-5 h-5 text-default-300 mr-2" />
          <MagnifyingGlassIcon className="w-5 h-5 text-default-300 mr-2" />
          <ShoppingBagIcon className="w-5 h-5 text-default-300 mr-0" />
        </div>
      </div>
    </>
  );
}

export default Header;
