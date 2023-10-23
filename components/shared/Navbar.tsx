"use client";

import { logo } from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Btn, ModeSwitcher } from ".";

const Navbar = () => {
  const { push } = useRouter();

  return (
    <nav className="flex flex-row justify-between items-center py-1">
      <div
        onClick={() => push("/")}
        className="flex flex-row items-center justify-start cursor-pointer"
      >
        <Image src={logo} alt="logo" width={50} height={50} />
        <h2 className="text-2xl font-semibold mx-2">Peace</h2>
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <ModeSwitcher />
        <Btn
          label="Sign Up"
          onClick={() => push("/signup")}
          variant="default"
        />
      </div>
    </nav>
  );
};

export default Navbar;
