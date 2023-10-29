"use client";

import { DoctorCard } from "@/components/doctor";
import type { IDoctor } from "@/types/doctor";
import { useGetDoctorsQuery } from "@/redux/api/doctorApi";
import { DoctorCardSkeleton } from "@/components/skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Doctors = () => {
  const { data: doctors, isLoading: getDoctorsIsLoading } =
    useGetDoctorsQuery(undefined);

  if (getDoctorsIsLoading)
    return (
      <section className="mt-6 sm-px-3">
        <Skeleton className="w-full h-10 mb-4" />
        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {Array(8)
            .fill(null)
            .map((_: null, i: number) => (
              <DoctorCardSkeleton key={i} />
            ))}
        </div>
      </section>
    );

  return (
    <>
      {doctors?.data.length > 0 ? (
        <section>
          <h1 className="text-4xl font-bold text-center mb-10">
            Our Medical Specialist
          </h1>
          <div className="flex flex-row gap-6 flex-wrap justify-center">
            {doctors?.data?.map((doctor: IDoctor) => (
              <DoctorCard
                key={doctor.id}
                image={doctor?.image}
                name={doctor?.name}
                speciality={doctor?.speciality}
                branch={doctor?.branch}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="min-h-screen flex flex-row items-center justify-center">
          <h3 className="text-3xl font-semibold">
            No Doctors Are Abailable Now !!!
          </h3>
        </section>
      )}
    </>
  );
};

export default Doctors;
