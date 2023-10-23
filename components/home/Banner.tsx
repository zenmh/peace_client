"use client";

import { useRouter } from "next/navigation";
import { Btn } from "../shared";

const Banner = () => {
  const { push } = useRouter();

  return (
    <header
      style={{
        backgroundImage: `url("/banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen rounded-md flex items-center justify-start"
    >
      <div className="pl-10">
        <h2 className="lg:text-6xl sm:text-5xl text-3xl font-bold text-cyan-500">
          Take Care Of Your <br /> Health Now
        </h2>
        <p className="text-md font-medium text-zinc-600 my-5">
          Since The First Days Of Operation Of Peace,
          <br /> Our Team Has Been Focused On Building <br /> A High-Quality
          Medical Service.
        </p>
        <div className="flex flex-row gap-4 items-center justify-start">
          <Btn label="Find a Doctor" onClick={() => push("/doctors")} />
          <Btn label="Book an Appoinment" variant="ghost" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
