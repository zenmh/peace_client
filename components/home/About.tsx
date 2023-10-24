import { doctor_animated } from "@/assets/images";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-cyan-400">Why Choose Us</h2>
        <p className="text-md text-zinc-700 dark:text-zinc-400">
          We have introduced the principle of family medicine, which means that
          the family practitioner will <br /> handle the majority of medical
          requests, with a specialists involved only if necessary.
        </p>
      </div>
      <div className="flex md:flex-row sm:flex-col mt-4 md:items-center">
        <div className="text-right flex flex-col justify-center lg:gap-60 md:gap-20">
          <div>
            <h4 className="text-cyan-400 font-bold">MODERN EQUIPMENT</h4>
            <p>
              We are not just a regular clinic, but a medical service provider,
              with modern cutting edge technology
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold">OPTIMAL PRICE</h4>
            <p>
              In order to obtain operational and accurate results, our Clinic s
              with which entered into contractual
            </p>
          </div>
        </div>
        <Image
          src={doctor_animated}
          alt="doctor_aminated_image"
          width={500}
          height={500}
          layout="responsive"
        />
        <div className="text-left flex flex-col justify-center lg:gap-60 md:gap-20">
          <div>
            <h4 className="text-cyan-400 font-bold">PROFESSIONAL DOCTORS</h4>
            <p>
              In order to obtain operational and accurate results, our Clinic s
              with which entered into contractual
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold">UALIFIED STUFF</h4>
            <p>
              We are not just a regular clinic, but a medical service provider,
              with which you can share any
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
