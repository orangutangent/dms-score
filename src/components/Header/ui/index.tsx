import React from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../../ui/LanguageSwitcher";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4  absolute w-full  top-0 z-50">
      <div className="flex justify-between px-6">
        <Link className="select-none" href="/">
          {/* <Image src="/logo.svg" alt="ESCAP Logo" width={180} height={40} /> */}
          {/* temporarely removed */}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
