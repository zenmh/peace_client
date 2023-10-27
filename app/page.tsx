import { About, Banner, Testimonials } from "@/components/home";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
