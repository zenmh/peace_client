"use client";

import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetDoctorQuery } from "@/redux/api/doctorApi";

interface DoctorDetailsProps {
  params: { id: string };
}

const DoctorDetails: FC<DoctorDetailsProps> = ({ params }) => {
  const { data: doctor, isLoading: doctorIsLoading } = useGetDoctorQuery(
    params?.id
  );

  if (doctorIsLoading) return <Skeleton />;

  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="col-span-2 border-2"></div>
      <div className="col-span-1 border-2"></div>
    </section>
  );
};

export default DoctorDetails;
