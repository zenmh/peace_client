import { logo } from "@/assets/images";
import { DoctorCard } from "@/components/doctor";

const Doctors = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Our Medical Specialist</h1>
      <section className="flex flex-row gap-6 flex-wrap justify-center">
        <DoctorCard name="Dr. New 1" speciality="Head" branch="Dhake" />
        <DoctorCard
          image="/banner.jpg"
          name="Dr, New 2"
          speciality="Eye"
          branch="Barishal"
        />
      </section>
    </>
  );
};

export default Doctors;
