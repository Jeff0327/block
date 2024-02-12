"use client";
import LoginForm from "@/components/Header/LoginForm";
import {
  Bars3Icon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Header() {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const LoginModal = useDisclosure();
  return (
    <>
      <LoginForm onClose={LoginModal.onClose} isOpen={LoginModal.open} />
      <div className="w-full bg-black p-4"></div>
      <div className="flex justify-between items-center w-full p-5">
        <div className="flex justify-between flex-row md:flex-row-reverse w-1/2">
          <div className="flex px-4 items-center justify-center">
            <Bars3Icon className="w-5 h-5 text-default-300" />

            <HeartIcon className="w-5 h-5 text-default-300" />
          </div>
          <div
            onMouseEnter={() => {
              setIsHover(true);
              console.log("mouseEnter");
            }}
            onMouseLeave={() => {
              setIsHover(false);
              console.log("mouse leave");
            }}
            className="flex justify-center itmes-center"
          >
            <HomeIcon
              onClick={() => {
                router.push("/");
              }}
              className="w-5 h-5 text-default-300"
            />
          </div>
        </div>
        <div className="flex px-4 items-center">
          <UserIcon
            onClick={() => {
              LoginModal.open();
            }}
            className="w-5 h-5 text-default-300 mr-2"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-default-300 mr-2" />
          <ShoppingBagIcon className="w-5 h-5 text-default-300 mr-0" />
        </div>
      </div>
      {isHover && <div className="x-full p-20 bg-black"></div>}
      {/* isOpenBar controll with hover */}
    </>
  );
}

export default Header;
