import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4  absolute w-full  top-0 z-50">
      <div className="container mx-auto">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
