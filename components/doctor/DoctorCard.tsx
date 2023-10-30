"use client";

import { FC } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Tooltip } from "../shared";
import { useRouter } from "next/navigation";

interface DoctorCardProps {
  id: string;
  image?: any;
  name: string;
  speciality: string;
  branch: string;
}

const DoctorCard: FC<DoctorCardProps> = ({
  id,
  image,
  name,
  speciality,
  branch,
}) => {
  const { push } = useRouter();

  return (
    <div className="rounded-lg border-2 dark:border-neutral-500 border-neutral-300 overflow-hidden max-w-[300px] flex flex-col justify-between">
      {image ? (
        <Image
          src={image}
          alt="doctor"
          height={300}
          width={300}
          layout="responsive"
          className="rounded-t-lg hover:scale-105 transition duration-300"
        />
      ) : (
        <div className="h-[300px] w-[300px] bg-slate-600 dark:bg-gray-700 text-center">
          <p className="text-[300px] mt-[-70px] font-bold dark:text-zinc-800">
            {name.slice(0, 1)}
          </p>
        </div>
      )}
      <div className="m-2">
        <Tooltip
          onClick={() => push(`/doctors/${id}`)}
          hoverText="Visit Doctors Profile"
          className="truncate text-xl text-[#005963] dark:text-zinc-300 font-bold"
        >
          {name}
        </Tooltip>
        <Tooltip
          hoverText="View Doctors"
          className="truncate text-md font-semibold my-2"
        >
          {speciality}
        </Tooltip>
        <Tooltip
          hoverText="The Doctor from Dhaka Branch"
          className="flex flex-row items-center justify-start font-semibold"
        >
          <MapPin size={20} color="#1DB5BA" />
          &nbsp;{branch}
        </Tooltip>
      </div>
    </div>
  );
};

export default DoctorCard;
